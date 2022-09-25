
// JS file that handles the sidebar mobile navigation



const sidebarButton = document.getElementsByClassName("sidebarMenuButton");
const sidebarMobileMenu = document.getElementsByClassName("sidebarMobileMenu");
const sidebarCloseButton = document.getElementsByClassName("sidebarMenuCloseButton");
const sidebarButtons = document.getElementsByClassName("sidebarMobileMenuButtons");

let deviceOrientation = GetOrientation();
let isMenuOpen = false;


// I just realized getElementsByClassName returns an array
sidebarButton[0].addEventListener("click", () => {
    if (deviceOrientation != true) {
        return;
    }

    if (!isMenuOpen) {
        // Sets transition values so we see animations!
        sidebarMobileMenu[0].style.visibility = "visible";
        sidebarMobileMenu[0].style.backgroundColor = "rgba(29, 31, 37, 0.8)";
        sidebarButtons[0].style.bottom = "5%"
        sidebarCloseButton[0].style.right = "25px";

        isMenuOpen = true;
    }
});


sidebarCloseButton[0].addEventListener("click", async function(event) {
    // Disable page reloading
    event.preventDefault();
    
    if (deviceOrientation != true) {
        return;
    }

    if (isMenuOpen) {
        // Sets transition values to their original value
        sidebarMobileMenu[0].style.backgroundColor = "rgba(29, 31, 37, 0)";
        sidebarButtons[0].style.bottom = "-9%"
        sidebarCloseButton[0].style.right = "-150px";

        await WaitAnimPlayTime();
        sidebarMobileMenu[0].style.visibility = "hidden";
        
        isMenuOpen = false;
    }
});


// Waits 0.5s, the time that transitions take
function WaitAnimPlayTime() {
    return new Promise(resolve => {
        setTimeout(resolve, 500);
    });
}


// If the height of the window is higher that width we aren't in landscape mode
// *NOTE:
// * I don't do something like screen.orientation or listen to events for maximum compatibility
function GetOrientation() {
    return window.innerHeight > window.innerWidth ? true : false;
}


window.onresize = function() {
    deviceOrientation = GetOrientation();
}