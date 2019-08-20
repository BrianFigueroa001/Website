$(document).ready(function(){
	//Initially hide contents
	$("#mainContent").hide();
	$("#N21").hide();

	//Start displaying contents
	$("#mainContent").delay("fast").fadeIn();
	$("#N21").delay("slow").fadeIn();
	$("#N21").animate({left: '5%'});
});

//Traces previous user inputs
class Stack
{

	constructor()
	{
		this.list = [];
	}

	push(x)
	{
		this.list.push(x);
	}

	pop()
	{
		return this.list.pop();
	}

	isEmpty()
	{
		return this.list.length == 0;
	}
}

//Create stack
var inputStack = new Stack();

//
var handleKeyPress = function(event) 
{
	event.preventDefault();
	initiate();
}

//Gets input and converts it.
var initiate = function()
{
	var input = document.getElementById("userInput").value; //Get user input
	showText(input); //Convert,  display, and say output out loud
	inputStack.push(input); //Push this input into the stack 
}

//Retrieve the previous input and convert it again.
var initiatePrev = function()
{
	//If the user hasn't entered anything yet OR they already went through all previous inputs
	if (inputStack.isEmpty() == true)
	{
		document.getElementById("userInput").value = "ERROR";
		showText("ERROR: NO PREVIOUS INPUT.");
	} 
	else 
	{
		var input = inputStack.pop(); //Get last input pushed into stack

		//Remove duplicate input and get the next input.
		if (document.getElementById("userInput").value == input)
		{
			input = inputStack.pop();
		}

		document.getElementById("userInput").value = input;
		showText(input);
	}
}

//Take user's input, change it, and display it in the output box.
var showText = function(input)
{

	//Store sound
	var beepSound = document.getElementById("beepAudio"); //Get sound
	var output = convertInput(input); 
	//Play beep sound.
	beepSound.play();

	//Display output
	document.getElementById("userOutput").innerHTML = output;

	//Read output
	setTimeout(textToSpeech, 800, output);
}

//Converts input into output
var convertInput = function(input)
{
	output = input;
	//Change text to all capital letters and replace spaces with a dash
	output = output.toUpperCase();
	output = output.replace(/\s/g,"-");

	//Specific cases where a dash is right after a .?!,
	if (output.includes(".-") == true)
	{
		output = output.split('.-').join('. ');
	}

	if (output.includes("?-") == true)
	{
		output = output.split('?-').join('? ');
	}

	if (output.includes("!-") == true)
	{
		output = output.split('!-').join('! ');
	}

	if (output.includes(",-") == true)
	{
		output = output.split(',-').join('-');
	}

	//Check for special keywords and statements
	output = analyzeStatements(output);

	return output;
}

//Helper function to check special keywords and statements
var analyzeStatements = function(o)
{
	//Reject selected meme inputs
	if (memeInputCheck(o) == true)
	{
		o = memeOutput(o);
	}

	//Convert into a more robot-like greeting.
	if (greetInputCheck(o) == true)
	{
		o = greetOutput(o);	
	}

	return o;
}

// This function searches the user's input for any indications of a greeting.
var greetInputCheck = function(o)
{
	if ((o.includes("HELLO") === true && o.length <= 6)||(o.includes("HULLO") === true && o.length <= 6)||
		(o.includes("HELLO-THERE") == true && o.length <= 12)||(o.includes("GREETINGS") == true && o.length <= 10))
	{
		return true;
	}

	return false;
}

//This function creates greeting output
var greetOutput = function(o)
{
	o = "GREETING-STATEMENT: " + o;
	return o;
}

//This function checks for the memes
var memeInputCheck = function(o)
{
	if ((o.includes("YOLO") == true)||(o.includes("SWAG") == true)){
		return true;
	}
	return false;
}

//This function inserts special cases
var memeOutput = function(o)
{
	//Don't say yolo or swag.
	return "ERROR: THIS-UNIT-DOES-NOT-SAY-YOLO-OR-SWAG.";
}

//Called whenever someone clicks on the robot element on the page
var soundHello = function()
{
	var helloSound = document.getElementById("helloAudio");
	helloSound.play();
}



//Implement WebSpeech API to get text-to-speech functionality
var textToSpeech = function (o)
{
	var synth = window.speechSynthesis; //create synth object
	var voices = synth.getVoices(); //Get list of voices availaboe for synth
	//Create a 'speaker'
	var speaker = new SpeechSynthesisUtterance(o);	

	speaker.pitch = 0;
	speaker.rate = 1.0;
	speaker.voice = voices[0];

    //Speak the output out loud.
	synth.speak(speaker);
}
