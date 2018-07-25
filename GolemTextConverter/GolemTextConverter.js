

function showText(){
	var input = document.getElementById("userInput").value;
	var beepSound = document.getElementById("beepAudio");
	var output = input;
	output = output.toUpperCase();
	output = output.replace(/\s/g,"-");

	if (output.includes(".-") == true){
		output = output.split('.-').join('. ');
	}

	if (output.includes("?-") == true){
		output = output.split('?-').join('? ');
	}

	if (output.includes("!-") == true){
		output = output.split('!-').join('! ');
	}

	if (output.includes(",-") == true){
		output = output.split(',-').join('-');
	}

	var beepSound = document.getElementById("beepAudio");
	beepSound.play()

	output = analyzeStatement(output);
	document.getElementById("userOutput").innerHTML = output;

	setTimeout(textToSpeech, 800, output);
}

function handleKeyPress(event) {
	event.preventDefault();
	showText();
}
//This function analyzes the statement and calls upon specific functions to check what kind of input it is.
function analyzeStatement(o){
	if (memeInputCheck(o) == true){
		o = memeOutput(o);
	}
	if (greetInputCheck(o) == true){
		o = greetOutput(o);	
	}
	return o;
}

// This function searches the user's input for any indications of a greeting.
function greetInputCheck(o){
	if ((o.includes("HELLO") == true && o.length <= 6)||(o.includes("HULLO") == true && o.length <= 6)||(o.includes("HELLO-THERE") == true && o.length <= 12)||(o.includes("GREETINGS") == true && o.length <= 10)){
		return true;
	}
	return false;
}

//This function creates greeting output
function greetOutput(o){
	o = "GREETING-STATEMENT: " + o;
	return o;
}
//This function checks for the memes
function memeInputCheck(o){
	if ((o.includes("YOLO") == true)||(o.includes("LOL") == true && o.length <= 4)||(o.includes("ROFL") == true && o.length <= 5)||(o.includes("SWAG") == true)){
		return true;
	}
	return false;
}
//This function creates output based on the memes
function memeOutput(o){
	if ((o.includes("YOLO") == true)||(o.includes("SWAG"))){
		return "STATEMENT-DENIED.";
	}
	if ((o.includes("ROFL") == true && o.length <= 5)||(o.includes("LOL") == true && o.length <= 4)){
		return "HA-HA-HA.";
	}
}

function soundHello(){
	var helloSound = document.getElementById("helloAudio");
	helloSound.play();
}

function textToSpeech(o){
	var synth = window.speechSynthesis;
	var voices = synth.getVoices();
	var utterThis = new SpeechSynthesisUtterance(o);	


	utterThis.pitch = 0;
	utterThis.rate = 1.1;
	utterThis.voice = voices[0];

	synth.speak(utterThis);
}
