$(document).ready(function() {

    initializeDisplay(); //Fade in elements and take user to the General Information (HOME) Section

    /*
    Each object stores the ID of three related elements from the html file (the section, the tab, and the background).
    Several functions below will use these objects to access the html elements by using their ID as the selector.
    
    These objects represent a "display" which are the three elements to be shown on the screen (the section, the tab, and the background).
    There is only one "display" active at any time, depending on which tab the user clicks on.
    */
    let homeDisplay = {section: "#homeSection", tab: "#homeTab", bgImage: "#bg1"}; //General Information
    let linkDisplay = {section: "#linkSection", tab: "#linkTab", bgImage: "#bg2"}; //Links and Projects
    let eduDisplay = {section: "#eduSection", tab: "#eduTab", bgImage: "#bg3"}; //Education History
    let expDisplay = {section: "#expSection", tab: "#expTab", bgImage: "#bg4"}; //Work Experience

    let currentDisplay = homeDisplay; //Tracks what is currently being displayed

    //When user hovers over a tab (buttons that say General Information, Links & Projects, Education History, and Work Experience).
    $("#homeTab, #linkTab, #eduTab, #expTab").hover(function() {
        $(this).css("background-color", "#21244c"); //Highlight clicked tab/button
    } , function() { 
        $(this).css("background-color", "#373A67"); //Remove highlight
    });
    
    //When user clicks any of the tabs.
    $("#homeTab, #linkTab, #eduTab, #expTab").click(function() {
        if ($(this).is("#homeTab")) {
            changeDisplay(homeDisplay, currentDisplay); //Change display to the General Information/Home 
            currentDisplay = homeDisplay; //Update the current display
        }

        else if ($(this).is("#linkTab")) {
            changeDisplay(linkDisplay, currentDisplay); //Change display to the Links & Projects 
            currentDisplay = linkDisplay;
        }

        else if ($(this).is("#eduTab")) {
            changeDisplay(eduDisplay, currentDisplay); //Change display to the Education History
            currentDisplay = eduDisplay;
        }

        else {
            changeDisplay(expDisplay, currentDisplay); //Change display to the work experience
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
    //Note: $(selector).animate(property) function does not change the selected element's CSS opacity property.
    $("#infoSections, #clickableTabs").animate({opacity: '0'}, 0);
    $("#linkSection, #eduSection, #expSection").animate({opacity: '0'}, 0);
    $("#bg2, #bg3, #bg4").animate({opacity: '0'}, 0);
}

//Fade in the home section and light up the home tab.
function initialAppear() {
    $("#infoSections, #clickableTabs").animate({opacity: '1'}, "slow");
    $("#homeTab").css("text-shadow", "2px 2px 8px white");
}

/*
Update what's displayed; show the new section/background, and light up the tab that the user selected.

newDisplay: An object storing the three corresponding elements (section, tab, and bgImage) to be displayed on the screen.

currentDisplay: The object with the three corresponding elements that's currently being displayed on the screen.
*/
function changeDisplay(newDisplay, currentDisplay) {
    //Prevents a black screen from the user clicking the same tab twice.
    if (newDisplay !== currentDisplay) {
        updateTabLighting(newDisplay, currentDisplay);
        updateBackgroundIndex(newDisplay, currentDisplay);
        crossfade(newDisplay, currentDisplay);
    }
}

//Light up the tab that the user clicked on, and turn off the previous.
function updateTabLighting(newDisplay, currentDisplay) {
    $(newDisplay.tab).css("text-shadow", "2px 2px 8px white");
    $(currentDisplay.tab).css("text-shadow", "none");
}


/*
Make sure that the new background has a lower z-index value than the current background.
Needed to achieve a sufficient "crossfade" animation done later in the crossfadeBG() function

The backgrounds are overlapping each other, each one positioned by the z-index. The one
with the highest z-index will be at the front, and the one with the lowest z-index will be at the back.
*/
function updateBackgroundIndex(newDisplay, currentDisplay) {

    //Note that $(selector).css("property") function returns a string. Must parse into an int for comparisons.
    let newBGPos = parseInt($(newDisplay.bgImage).css("z-index")); //Get z-index position of new background as an integer
    let currentBGPos = parseInt($(currentDisplay.bgImage).css("z-index")); //Get z-index position of current background.

    //Check if the new background's z-index is higher than the current BG. If so, their values must be swapped.
    if (newBGPos > currentBGPos) {
        //Swap z-index values
        let temp = newBGPos;
        newBGPos = currentBGPos;
        currentBGPos = temp;

        //Make the new background below/behind the current background by switching their z-index positions.
        $(currentDisplay.bgImage).css("z-index", currentBGPos);  
        $(newDisplay.bgImage).css("z-index", newBGPos); //By having the lower z-index, its hidden behind the current background.
    }
}

//Crossfade from the previous background/section into the one that the user selected.
function crossfade(newDisplay, currentDisplay) {
    crossfadeBG(newDisplay, currentDisplay); //Crossfade from the current background to the new background.
    crossfadeSect(newDisplay, currentDisplay); //Crossfade from the current section text to the new section text.
}

/*
Crossfade from the current background to the new background.

The current background will be at the forefront on the screen (it will have the highest z-index).
The new background will have a varying z-index lower than the current background's z-index.
This means that the new background will be somewhere behind the current background, hidden from view.
Note that the two other backgrounds will remain completely invisible (opacity = 0).

When the function starts, the current background is fully visible while the new background is still invisible (opacity = 0).

The new background becomes visible instantly (opacity = 1), but it's still hiding from view because of the current background 
with the higher z-index value (meaning that the current background is obstructing the view of the new background).

Afterwards, the current background fades away away (opacity = 0) over a duration of 600 milliseconds. This achieves the "crossfade" effect
by having the current background slowly fade away to show the new background that was waiting behind it.
*/
function crossfadeBG(newDisplay, currentDisplay) {
    //Note that a callback function is required to prevent a white flash in the background. First make the new display visible, and THEN fade the current background.
    $(newDisplay.bgImage).animate({opacity: '1'}, 0, function() { //Make the new background have full opacity instantly while it's still below/behind the current (and visible) background.
            $(currentDisplay.bgImage).animate({opacity: '0'}, 600); //Fade the current background at the front in a span of 600 milliseconds, making it "crossfade" into the new background.
    }); 
}

//Crossfade from the current section to the new section.
function crossfadeSect(newDisplay, currentDisplay) {
    //Callback function not required. It seems to crossfade just fine like this.
    $(newDisplay.section).animate({opacity: '1'}, 600);
    $(currentDisplay.section).animate({opacity: '0'}, 600);
}

