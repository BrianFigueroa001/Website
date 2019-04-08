$(document).ready(function() {
    //All custom JQuery methods go here
    $("div").hide(); //Clear screen

    //Elements fade in
    $("#header").delay(300).fadeIn("slow");
    $("#mainInfoSection").delay(500).fadeIn("slow");
    $("#linksSection").delay(600).fadeIn("slow");
    $("#picSection").delay(700).fadeIn("slow");

    $("#historySection").delay(0).fadeIn(0, function(){
    	$("#historySection").slideUp(0);
    });

    $("#educationSection").delay(0).fadeIn(0, function(){
    	$("#educationSection").slideUp(0);
    });

    $("#goalsSection").delay(0).fadeIn(0, function(){
    	$("#goalsSection").slideUp(0);
    });

    $("#historyClickable").delay(800).fadeIn("slow");

    $("#educationClickable").delay(800).fadeIn("slow");

    $("#goalsClickable").delay(800).fadeIn("slow");

    //Clicking interative
    $("#historyClickable").click(function(){
    	//Store status of the "Personal History" button
    	var outlineStatus = $("#historyClickable").css("outline-style");

    	if (outlineStatus == "outset") {
    		$("#historyClickable").css("outline-style", "inset");
    	}
    	else {
    		$("#historyClickable").css("outline-style", "outset");
    	}

    	//Toggle history section and remove other sections from display.
    	$("#educationSection").slideUp("slow");
    	$("#educationClickable").css("outline-style", "outset");
    	$("#goalsSection").slideUp("slow");
    	$("#goalsClickable").css("outline-style", "outset");

    	$("#historySection").toggle("slow");
    });

    $("#educationClickable").click(function(){
    	//Store status of the "Education" button
    	var outlineStatus = $("#educationClickable").css("outline-style");

    	if (outlineStatus == "outset") {
    		$("#educationClickable").css("outline-style", "inset");
    	}
    	else {
    		$("#educationClickable").css("outline-style", "outset");
    	}

    	$("#historySection").slideUp("slow");
    	$("#historyClickable").css("outline-style", "outset");
    	$("#goalsSection").slideUp("slow");
    	$("#goalsClickable").css("outline-style", "outset");

    	$("#educationSection").toggle("slow");
    });

    $("#goalsClickable").click(function(){
		//Store status of the "Goals" button
    	var outlineStatus = $("#goalsClickable").css("outline-style");

    	if (outlineStatus == "outset") {
    		$("#goalsClickable").css("outline-style", "inset");
    	}
    	else {
    		$("#goalsClickable").css("outline-style", "outset");
    	}

    	$("#historySection").slideUp("slow");
    	$("#historyClickable").css("outline-style", "outset");
    	$("#educationSection").slideUp("slow");
    	$("#educationClickable").css("outline-style", "outset");

    	$("#goalsSection").toggle("slow");
    });


});