$(document).ready(function() {
    initialize();
    /*The following code allow users to switch information sections by selecting tabs.*/

    //When user hovers over the home tab
    $("#homeClickable").hover( function() {
        $(this).css("background-color", "#21244c"); //Highlight home tab
    } , function() { 
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

    //When user hovers over the links tab
    $("#linksClickable").hover( function() {
        $(this).css("background-color", "#21244c"); //Highlight link tab
    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

    //When user hovers over the education tab
    $("#educationClickable").hover( function() {
        $(this).css("background-color", "#21244c"); //Highlight education tab
    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

    //When user hovers over the experience tab
    $("#experienceClickable").hover( function() {
        $(this).css("background-color", "#21244c"); //Highlight experience tab
    } , function() {
        $(this).css("background-color", "#373A67"); //Remove highlight over where the cursor is pointing
    });

    //When user clicks any of the tabs.
    $("#homeClickable").click( function() {
        clickTab(this, "#homeSection", "#img1");
    });

    $("#linksClickable").click( function() {
        clickTab(this, "#linksSection", "#img2");
    });

    $("#educationClickable").click( function() {
        clickTab(this, "#educationSection", "#img3");
    });

    $("#experienceClickable").click( function() {
        clickTab(this, "#experienceSection", "#img4");
    });
});

/*
Displays the section the user wants to see, and hides every other.
Also lights up the tab that the user selected while de-lighting every other.
The background "crossfades" into another by setting the corresponding image "below"
the current image like in a pile, and the top image will fade out and display the new image.

Image1 = home tab. Img2 = Links/Projects tab. Img3 = education tab. Img4 = experience tab.
*/
function clickTab(selectedTab, selectedSection, newBackground) {
    $(newBackground).css("z-index", "-2"); //Set this image below the current background
    $(newBackground).animate({opacity: '1'}, 0); //Immediately set its opacity to 1.
    $(selectedSection).css("z-index", "0");
    $(selectedSection).animate({opacity: '1'}, 0);
    //Fade out the non-selected sections, remove tab-text lighting, and 
    if (!$("#homeClickable").is(selectedTab))
    {
        $("#img1").css("z-index", "-1"); //Set this image in front of all other elements
        $("#img1").animate({opacity: '0'}, 300); //Fade this image out; it will "Crossfade" to the corresponding image parameter
        // $("#homeSection").(500); //Fade out home section.
        // $("#homeClickable").css("text-shadow", "none"); //Remove tab-text lighting.
        $("#homeSection").css("z-index", "1");
        $("#homeSection").animate({opacity: '0'}, 500); //Fade out home section.
        $("#homeClickable").css("text-shadow", "none"); //Remove tab-text lighting.
    }

    if (!$("#linksClickable").is(selectedTab))
    {
        $("#img2").css("z-index", "-1");
        $("#img2").animate({opacity: '0'}, 300);
        $("#linksSection").css("z-index", "1");
        $("#linksSection").animate({opacity: '0'}, 500);
        $("#linksClickable").css("text-shadow", "none"); 
    }

    if (!$("#educationClickable").is(selectedTab))
    {
        $("#img3").css("z-index", "-1");
        $("#img3").animate({opacity: '0'}, 300);
        $("#educationSection").css("z-index", "1");
        $("#educationSection").animate({opacity: '0'}, 500);
        $("#educationClickable").css("text-shadow", "none"); 
    }

    if (!$("#experienceClickable").is(selectedTab))
    {
        $("#img4").css("z-index", "-1");
        $("#img4").animate({opacity: '0'}, 300);
        $("#experienceSection").css("z-index", "1");
        $("#experienceSection").animate({opacity: '0'}, 500);
        $("#experienceClickable").css("text-shadow", "none"); 
    }

    // $(selectedSection).fadeIn(500); //Fdde in corresponding section
    $(selectedTab).css("text-shadow", "2px 2px 8px white"); //Highlight corresponding tab-text lighting.
}

/*The following lines of code hides everything initially, and then shows the background, home section, and tabs in that order*/
function initialize()
{   
    initialDisappear();
    initialAppear();
}

function initialDisappear() { 
    $("#infoSections, #clickableTabs").animate({opacity: '0'}, 0);
    $("#linksSection, #educationSection, #experienceSection").animate({opacity: '0'}, 0);
    $("#img2, #img3, #img4").animate({opacity: '0'}, 0);
}

function initialAppear()
{
    $("#infoSections, #clickableTabs").animate({opacity: '1'}, "slow");
    $("#homeClickable").css("text-shadow", "2px 2px 8px white");
}
