//Used to animate the background
$(document).ready(function() {
	//Store the current section being displayed;
	let currentSection = "#homeSection";
	let currentExpText = "#zgText";

	$("#homeIconEle").css("color", "#0099ff");
	$("#zgPic").css("box-shadow", "0vw 0vw 3vw blue");

	//Highlight whichever icon the user has their mouse over.
	$("#homeIconEle, #projIconEle, #expIconEle, #eduIconEle").click(function(){
		$(this).css("color", "#0099ff");

		if (!$(this).is( $("#homeIconEle")))
		{
			$("#homeIconEle").css("color", "white");
		}

		if (!$(this).is( $("#projIconEle")))
		{
			$("#projIconEle").css("color", "white");
		}

		if (!$(this).is( $("#expIconEle")))
		{
			$("#expIconEle").css("color", "white");
		}

		if(!$(this).is( $("#eduIconEle")))
		{
			$("#eduIconEle").css("color", "white");
		}

		//Change section information based on which navigation icon the user clicks on.
		let selectedSection; //Stores the section that the user wants to display

		if ($("#homeIconEle").is(this)) {
			selectedSection = "#homeSection";
		}
		else if ($("#projIconEle").is(this)) {
			selectedSection = "#projSection";
		}
		else if ($("#expIconEle").is(this)) {
			selectedSection = "#expSection";
		}
		else {
			selectedSection = "#eduSection";
		}

		//Prevents a bug by not running code if the selected section is already displayed.
		if (selectedSection !== currentSection)
		{
			//Display the selected section and hide the current section.
			$(selectedSection).css("display", "block");
			$(currentSection).css("display", "none");

			//Update the current section
			currentSection = selectedSection;
		}
	});
	
   //    box-shadow: 0vw 0vw 1vw grey;

	//Highlight whichever image the user clicked on in the experience section
	$("#zgPic, #codeExplorersPic, #fiuPic").click(function(){
		$(this).css("box-shadow", "0vw 0vw 3vw blue");

		if (!$(this).is( $("#zgPic")))
		{
			$("#zgPic").css("box-shadow", "0vw 0vw 0vw grey");
		}

		if (!$(this).is($("#codeExplorersPic")))
		{
			$("#codeExplorersPic").css("box-shadow", "0vw 0vw 0vw grey");
		}

		if (!$(this).is( $("#fiuPic")))
		{
			$("#fiuPic").css("box-shadow", "0vw 0vw 0vw grey");
		}


		//Change section information based on which navigation icon the user clicks on.
		let selectedExpText; //Stores the section that the user wants to display

		if ($("#zgPic").is(this)) {
			selectedExpText = "#zgText";
		}
		else if ($("#codeExplorersPic").is(this)) {
			selectedExpText = "#codeExplorersText";
		}
		else {
			selectedExpText = "#fiuText";
		}

		//Prevents a bug by not running code if the selected section is already displayed.
		if (selectedExpText !== currentExpText)
		{
			//Display the selected section and hide the current section.
			$(selectedExpText).css("display", "block");
			$(currentExpText).css("display", "none");

			//Update the current section
			currentExpText = selectedExpText;
		}
	});

});

