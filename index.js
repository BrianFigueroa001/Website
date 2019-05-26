$(document).ready(function() {

/*The following code adds user interactibility for when they hover over the tabs*/

    //When user hovers over the home tab
    $("#homeClickable").hover( function() { //Cursor enters
        //Highlight home tab
        $(this).css("background-color", "#222cb7"); 

        //User clicks home tab
        $(this).click( function () {
            //If the home section is hidden
            if ($("#homeSection").css("visibility") === "hidden")
            {
                //Leave only home section visible
                $("#homeSection").css("visibility", "visible");
                $("#educationSection").css("visibility", "hidden");
                $("#experienceSection").css("visibility", "hidden");
                $("#linksSection").css("visibility", "hidden");
            }
        });

    } , function() { //Cursor leaves
        $(this).css("background-color", "#373A67"); //Remove highlight
    });

    //When user hovers over the education tab
    $("#educationClickable").hover( function() {
        //Highlight education tab
        $(this).css("background-color", "#222cb7");

        //User clicks education tab
        $(this).click( function () {
            //If the education section is hidden
            if ($("#educationSection").css("visibility") === "hidden")
            {
                //Leave only education section visible
                $("#homeSection").css("visibility", "hidden");
                $("#educationSection").css("visibility", "visible");
                $("#experienceSection").css("visibility", "hidden");
                $("#linksSection").css("visibility", "hidden");
            }
        });

    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight
    });

    //When user hovers over the experience tab
    $("#experienceClickable").hover( function() {
        //Highlight experience tab
        $(this).css("background-color", "#222cb7"); 

        //User clicks experience tab
        $(this).click( function() {
            //If the experience section is hidden
            if ($("#experienceSection").css("visibility") === "hidden")
            {
                //Leave only experience section visible
                $("#homeSection").css("visibility", "hidden");
                $("#educationSection").css("visibility", "hidden");
                $("#experienceSection").css("visibility", "visible");
                $("#linksSection").css("visibility", "hidden");
            }
        });

    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight
    });

    //When user hovers over the links tab
    $("#linksClickable").hover( function() {
        //Highlight link tab
        $(this).css("background-color", "#222cb7");

        //User clicks links tab
        $(this).click( function() {
            //If the link section is hidden
            if ($("#linksSection").css("visibility") === "hidden")
            {
                //Leave only link section visible
                $("#homeSection").css("visibility", "hidden");
                $("#educationSection").css("visibility", "hidden");
                $("#experienceSection").css("visibility", "hidden");
                $("#linksSection").css("visibility", "visible");
            }
        });

    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight
    });



});