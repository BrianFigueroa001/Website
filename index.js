$(document).ready(function() {

/*The following lines of code hides everything initially, and then shows the background, home section, and tabs in that order*/

    $("#infoSections").fadeOut(0);
    $("#clickableTabs").fadeOut(0);
    $("#homeSection").fadeOut(0);
    $("#educationSection").fadeOut(0);
    $("#experienceSection").fadeOut(0);
    $("#linksSection").fadeOut(0);
    $("#homeClickable").fadeOut(0);
    $("#educationClickable").fadeOut(0);
    $("#experienceClickable").fadeOut(0);
    $("#linksClickable").fadeOut(0);
    //Automatically light up home tab since home section is initially displayed.
    $("#homeClickable").css("text-shadow", "2px 2px 8px white");

    //Gets rid of that split second text overlapping home section upon opening web-page
    $("#infoSections").css("visibility", "visible");

/*The initial elements to be displayed (background, home section, and all tabs)*/
    $("#infoSections").fadeIn(500);
    $("#homeSection").fadeIn(600);
    $("#clickableTabs").fadeIn(700);
    $("#homeClickable").fadeIn(850);
    $("#educationClickable").fadeIn(1000);
    $("#experienceClickable").fadeIn(1150);
    $("#linksClickable").fadeIn(1300);



/*The following code allow users to switch information sections.*/

    //When user hovers over the home tab
    $("#homeClickable").hover( function() { //Cursor enters
        //Highlight home tab
        $(this).css("background-color", "#21244c"); 

        //User clicks home tab
        $(this).click( function () {
            $("#educationSection").fadeOut(0);
            $("#educationClickable").css("text-shadow", "none");

            $("#experienceSection").fadeOut(0);
            $("#experienceClickable").css("text-shadow", "none");

            $("#linksSection").fadeOut(0);
            $("#linksClickable").css("text-shadow", "none");

            $("#homeSection").fadeIn(500);
            $(this).css("text-shadow", "2px 2px 8px white"); //Light up the home tab's text

            $("body").css("background-image", "url('homeTest.jpg')");

        });

    } , function() { //Cursor leaves
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

    //When user hovers over the education tab
    $("#educationClickable").hover( function() {
        //Highlight education tab
        $(this).css("background-color", "#21244c"); 

        //User clicks education tab
        $(this).click( function () {
            //Display education section and hide all the others
            $("#homeSection").fadeOut(0);
            $("#homeClickable").css("text-shadow", "none");

            $("#experienceSection").fadeOut(0);
            $("#experienceClickable").css("text-shadow", "none");

            $("#linksSection").fadeOut(0);
            $("#linksClickable").css("text-shadow", "none");

            $("#educationSection").fadeIn(500);
            $(this).css("text-shadow", "2px 2px 8px white"); //Light up education tab's text

            $("body").css("background-image", "url('educationTest.jpg')");
        });

    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

    //When user hovers over the experience tab
    $("#experienceClickable").hover( function() {
        //Highlight experience tab
        $(this).css("background-color", "#21244c");  

        //User clicks experience tab
        $(this).click( function() {
            //Display the experience section and hide all the others.
            $("#homeSection").fadeOut(0);
            $("#homeClickable").css("text-shadow", "none"); 

            $("#educationSection").fadeOut(0);
            $("#educationClickable").css("text-shadow", "none");

            $("#linksSection").fadeOut(0);
            $("#linksClickable").css("text-shadow", "none");

            $("#experienceSection").fadeIn(500);
            $(this).css("text-shadow", "2px 2px 8px white"); //Light up the experience tab's text

            $("body").css("background-image", "url('expTest.jpg')");

        });

    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

    //When user hovers over the links tab
    $("#linksClickable").hover( function() {
        //Highlight link tab
        $(this).css("background-color", "#21244c"); 

        //User clicks links tab
        $(this).click( function() {
            //Display the experience section and hide all the others.
            $("#homeSection").fadeOut(0);
            $("#homeClickable").css("text-shadow", "none"); 

            $("#educationSection").fadeOut(0);
            $("#educationClickable").css("text-shadow", "none");

            $("#experienceSection").fadeOut(0);
            $("#experienceClickable").css("text-shadow", "none"); 

            $("#linksSection").fadeIn(500);
            $(this).css("text-shadow", "2px 2px 8px white"); //Light up the links tab's text
            $("body").css("background-image", "url('linkTest.jpg')");

        });

    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

});