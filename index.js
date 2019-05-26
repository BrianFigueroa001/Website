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
                //Display home section and hide others.
                $("#homeSection").css("visibility", "visible");
                $(this).css("text-shadow", "2px 2px 8px white"); //Light up the home tab.

                $("#educationSection").css("visibility", "hidden");
                $("#educationClickable").css("text-shadow", "none");

                $("#experienceSection").css("visibility", "hidden");
                $("#experienceClickable").css("text-shadow", "none");

                $("#linksSection").css("visibility", "hidden");
                $("#linksClickable").css("text-shadow", "none");
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
                //Display education section and hide the others.
                $("#homeSection").css("visibility", "hidden");
                $("#homeClickable").css("text-shadow", "none");

                $("#educationSection").css("visibility", "visible");
                $(this).css("text-shadow", "2px 2px 8px white"); //Light up the education tab

                $("#experienceSection").css("visibility", "hidden");
                $("#experienceClickable").css("text-shadow", "none");

                $("#linksSection").css("visibility", "hidden");
                $("#linksClickable").css("text-shadow", "none");

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
                //Display experience section and hide others.
                $("#homeSection").css("visibility", "hidden");
                $("#homeClickable").css("text-shadow", "none");

                $("#educationSection").css("visibility", "hidden");
                $("#educationClickable").css("text-shadow", "none");

                $("#experienceSection").css("visibility", "visible");
                $(this).css("text-shadow", "2px 2px 8px white"); //Light up the experience tab

                $("#linksSection").css("visibility", "hidden");
                $("#linksClickable").css("text-shadow", "none");
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
                //Display links section and hide others.
                $("#homeSection").css("visibility", "hidden");
                $("#homeClickable").css("text-shadow", "none");

                $("#educationSection").css("visibility", "hidden");
                $("#educationClickable").css("text-shadow", "none");

                $("#experienceSection").css("visibility", "hidden");
                $("#experienceClickable").css("text-shadow", "none");

                $("#linksSection").css("visibility", "visible");
                $(this).css("text-shadow", "2px 2px 8px white"); //Light up the link tab
            }
        });

    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight
    });

});