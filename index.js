//Used to animate the background
$(document).ready(function() {
	//Store the current section being displayed;
	let currentSection = "#homeSection";
	
	//Highlight whichever icon the user has their mouse over.
	$("#homeIconEle, #projIconEle, #expIconEle, #eduIconEle").hover(function(){
		$(this).css("color", "blue");
	}, function() {
		$(this).css("color", "white");
	});
	
	//Change section information based on which navigation icon the user clicks on.
	$("#homeIconEle, #projIconEle, #expIconEle, #eduIconEle").click(function(){
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
	
	//Links to projects when the image is clicked.
	$("#projGolemPic").click(function(){
		window.location.href= "\GolemTextConverter/GolemTextConverter.html";	
	});

	$("#CalcPic").click(function(){
		window.location.href= "\GolemTextConverter/GolemTextConverter.html";	
	});	
});

