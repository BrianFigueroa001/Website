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
Parameters: jQuery object, string containing section, string containing img url
*/
function clickTab(selectedTab, selectedSection, image) {
    $(image).css("z-index", "0");
    $(image).animate({opacity: '1'}, 0);
    //Fade out the non-selected sections and remove the lighting
    if (!$("#homeClickable").is(selectedTab))
    {
        $("#img1").css("z-index", "1");
        $("#img1").animate({opacity: '0'}, 500);
        $("#homeSection").fadeOut(0);
        $("#homeClickable").css("text-shadow", "none"); 
    }

    if (!$("#linksClickable").is(selectedTab))
    {
        $("#img2").css("z-index", "1");
        $("#img2").animate({opacity: '0'}, 500);
        $("#linksSection").fadeOut(0);
        $("#linksClickable").css("text-shadow", "none"); 
    }

    if (!$("#educationClickable").is(selectedTab))
    {
        $("#img3").css("z-index", "1");
        $("#img3").animate({opacity: '0'}, 500);
        $("#educationSection").fadeOut(0);
        $("#educationClickable").css("text-shadow", "none"); 
    }

    if (!$("#experienceClickable").is(selectedTab))
    {
        $("#img4").css("z-index", "1");
        $("#img4").animate({opacity: '0'}, 500);
        $("#experienceSection").fadeOut(0);
        $("#experienceClickable").css("text-shadow", "none"); 
    }
    //Display the selected section and light up its corresponding tab.
    // $("body").css("background-image", backgroundImage);
    // $(image).fadeIn(100);
    $(selectedSection).fadeIn(500);
    $(selectedTab).css("text-shadow", "2px 2px 8px white");
}

/*The following lines of code hides everything initially, and then shows the background, home section, and tabs in that order*/
function initialize()
{
    $("#img2").animate({opacity: '0'}, 0);
    $("#img3").animate({opacity: '0'}, 0);
    $("#img4").animate({opacity: '0'}, 0);
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
    //Gets rid of overlapping sections for the split-second duration upon opening the website
    $("#infoSections").css("visibility", "visible");

    /*The initial elements to be displayed (background, home section, and all tabs)*/
    $("#infoSections").fadeIn(500);
    $("#homeSection").fadeIn(600);
    $("#clickableTabs").fadeIn(700);
    $("#homeClickable").fadeIn(850);
    $("#educationClickable").fadeIn(1000);
    $("#experienceClickable").fadeIn(1150);
    $("#linksClickable").fadeIn(1300);
}
