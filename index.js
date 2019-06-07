$(document).ready
(
    function() 
    {
        initialize();

        //When user hovers over a tab.
        $("#homeTab, #linkTab, #eduTab, #expTab").hover
        ( 
            function() 
            {
            $(this).css("background-color", "#21244c"); //Highlight tab
            } , 

            function() 
            { 
            $(this).css("background-color", "#373A67"); //Remove highlight
            }
        );

        //When user clicks any of the tabs.
        $("#homeTab, #linkTab, #eduTab, #expTab").click
        (
            function() 
            {
                tabClicked(this)
            }
        );
    }
);

/*Slowly fade in the elements on the website when it's first opened.*/
function initialize()
{   
    initialDisappear();
    initialAppear();
}

//Make everything except the home background disappear.
function initialDisappear() 
{ 
    $("#infoSections, #clickableTabs").animate({opacity: '0'}, 0);
    $("#linkSection, #eduSection, #expSection").animate({opacity: '0'}, 0);
    $("#bg2, #bg3, #bg4").animate({opacity: '0'}, 0);
}

//Diplsay the home section first and light up the home tab.
function initialAppear()
{
    $("#infoSections, #clickableTabs").animate({opacity: '1'}, "slow");
    $("#homeTab").css("text-shadow", "2px 2px 8px white");
}

/*
Captures which tab the user clicked.
*/
function tabClicked(clickedTab)
{
    if ($(clickedTab).is("#homeTab"))
    {
        changeInfo("#homeTab", "#homeSection", "#bg1"); //Display home
    }

    else if ($(clickedTab).is("#linkTab")) 
    {
        changeInfo("#linkTab", "#linkSection", "#bg2"); //Display links & projects
    }

    else if ($(clickedTab).is("#eduTab")) 
    {
        changeInfo("#eduTab", "#eduSection", "#bg3"); //Display education
    }

    else
    {
        changeInfo("#expTab", "#expSection", "#bg4"); //Display work experience
    }
}

//Changes what's displayed on the screen based on which tab the user clicked on.
function changeInfo(clickedTab, newSection, newBG)
{
    //Prepare the new background to display.
    $(newBG).css("z-index", "-2"); //Set this background below the current
    $(newBG).animate({opacity: '1'}, 0); //Make it visible and ready for display
        


    //Prepare the new section to display.
    $(newSection).css("z-index", "0");//Set this section below the current.
    $(newSection).animate({opacity: '1'}, 0); //Make it visible and ready for display
    
    $(clickedTab).css("text-shadow", "2px 2px 8px white"); //Light up the clicked tab.


    //Make each section and background disappear except for the new one to be displayed
    if (!$(newSection).is("#homeSection"))
    {
        $("#homeTab").css("text-shadow", "none"); //Remove lighting.
        crossfade("#homeSection", "#bg1"); //Remove home section and its background

    }

    if (!$(newSection).is("#linkSection"))
    {
        $("#linkTab").css("text-shadow", "none"); 
        crossfade("#linkSection", "#bg2");

    }

    if (!$(newSection).is("#eduSection"))
    {
        $("#eduTab").css("text-shadow", "none"); 
        crossfade("#eduSection", "#bg3");

    }

    if (!$(newSection).is("#expSection"))
    {
        $("#expTab").css("text-shadow", "none"); 
        crossfade("#expSection","#bg4");
    }
}

/*
Changes the opacity of the the current section/background to 0, making it invisible. 
Since the new section/background is "below" is below the current section/background, it will
"crossfade" between the current and new.*/
function crossfade(fadingSection, fadingBG)
{
        $(fadingBG).css("z-index", "-1");
        $(fadingBG).animate({opacity: '0'}, 500);
        $(fadingSection).css("z-index", "1");
        $(fadingSection).animate({opacity: '0'}, 500);
}
