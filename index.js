$(document).ready(function(){

    startGoogleTranslateElement(); //Initialize google translate
    initializeDisplay();

    //Stores data containing each section and their associated tab and background.
    let homeDisplay = {section: "#homeSection", tab: "#homeTab", bgImage: "#bg1"}; 
    let linkDisplay = {section: "#linkSection", tab: "#linkTab", bgImage: "#bg2"};
    let eduDisplay = {section: "#eduSection", tab: "#eduTab", bgImage: "#bg3"};
    let expDisplay = {section: "#expSection", tab: "#expTab", bgImage: "#bg4"};

    let currentDisplay = homeDisplay; //Tracks the current display

    //When user hovers over a tab.
    $("#homeTab, #linkTab, #eduTab, #expTab").hover(function() {
        $(this).css("background-color", "#21244c"); //Highlight tab
    } , function() { 
        $(this).css("background-color", "#373A67"); //Remove highlight
    });
    
    //When user clicks any of the tabs.
    $("#homeTab, #linkTab, #eduTab, #expTab").click(function() {
        if ($(this).is("#homeTab")) {
            changeDisplay(homeDisplay, currentDisplay);
            currentDisplay = homeDisplay;
        }

        else if ($(this).is("#linkTab")) {
            changeDisplay(linkDisplay, currentDisplay);
            currentDisplay = linkDisplay;
        }

        else if ($(this).is("#eduTab")) {
            changeDisplay(eduDisplay, currentDisplay);
            currentDisplay = eduDisplay;
        }

        else {
            changeDisplay(expDisplay, currentDisplay);
            currentDisplay = expDisplay;
        }
    });
});

/*Slowly fade in the elements on the website when it's first opened.*/
function initializeDisplay() {   
    initialDisappear();
    initialAppear();
}

//Make everything except the home background disappear.
function initialDisappear() { 
    $("#infoSections, #clickableTabs").animate({opacity: '0'}, 0);
    $("#linkSection, #eduSection, #expSection").animate({opacity: '0'}, 0);
    $("#bg2, #bg3, #bg4").animate({opacity: '0'}, 0);
}

//Diplsay the home section first and light up the home tab.
function initialAppear() {
    $("#infoSections, #clickableTabs").animate({opacity: '1'}, "slow");
    $("#homeTab").css("text-shadow", "2px 2px 8px white");
}

//Update what's displayed; show the new section/background, and light up the tab that the user selected.
function changeDisplay(newDisplay, currentDisplay) {
    //Prevents a black screen from the user clicking the same tab twice.
    if (newDisplay !== currentDisplay) {
        updateTabLighting(newDisplay, currentDisplay);
        updateBackgroundIndex(newDisplay, currentDisplay);
        // updateSectionIndex(newDisplay, currentDisplay);
        crossfade(newDisplay, currentDisplay);
    }


}


//Make sure that the new background has a lower z-index value than the current background.
function updateBackgroundIndex(newDisplay, currentDisplay) {
    //Note that css({property}) seems to return a string. Must parse into an int for comparisons.

    let newBGPos = parseInt($(newDisplay.bgImage).css("z-index")); //Get z-index position of new background as an integer
    let currentBGPos = parseInt($(currentDisplay.bgImage).css("z-index")); //Get z-index position of current background.

    //Check if the new background's z-index is higher than the current BG. If so, their values must be swapped
    if (newBGPos > currentBGPos) {
        //Swap z-index values
        let temp = newBGPos;
        newBGPos = currentBGPos;
        currentBGPos = temp;

        //Make the new background hidden behind the current background by switching their z-index positions.
        $(currentDisplay.bgImage).css("z-index", currentBGPos);  
        $(newDisplay.bgImage).css("z-index", newBGPos); //By having the lower z-index, its hidden behind the current background.
    }
}


//Light up the text that the user clicked on, and turn off the previous.
function updateTabLighting(newDisplay, currentDisplay) {
    $(newDisplay.tab).css("text-shadow", "2px 2px 8px white");
    $(currentDisplay.tab).css("text-shadow", "none");
}

//Crossfade from the previous background/section into the one that the user selected.
function crossfade(newDisplay, currentDisplay) {
    crossfadeBG(newDisplay, currentDisplay); //Crossfade from the current background to the new background.
    crossfadeSect(newDisplay, currentDisplay); //Crossfade from the current section to the new section.
}

//Crossfade from the current background to the new background.
function crossfadeBG(newDisplay, currentDisplay) {
    $(newDisplay.bgImage).animate({opacity: '1'}, 0, function() { //Make the new background have full opacity instantly while it's still behind the current background
            $(currentDisplay.bgImage).animate({opacity: '0'}, 600); //Fade the current background at the front in a span of 600 milliseconds, making it "crossfade" into the new background.
    }); 
}

//Crossfade from the current section to the new section.
function crossfadeSect(newDisplay, currentDisplay)
{
    $(newDisplay.section).animate({opacity: '1'}, 600);
    $(currentDisplay.section).animate({opacity: '0'}, 600);
}

//Access google translate's API. It'll modify div element 'googleTranslateElement'
function startGoogleTranslateElement()
{
     new google.translate.TranslateElement({pageLanguage: 'en'}, 'googleTranslateElement');
}
