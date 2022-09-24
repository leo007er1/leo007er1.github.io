
// JS file that handles the sidebar mobile navigation



const sidebarButton = document.getElementsByClassName("sidebarMenuButton");
const sidebarMobileMenu = document.getElementsByClassName("sidebarMobileMenu");
const sidebarCloseButton = document.getElementsByClassName("sidebarMenuCloseButton");
let deviceOrientation = GetOrientation();
let isMenuOpen = false;


// I just realized getElementsByClassName returns an array
sidebarButton[0].addEventListener("click", () => {
    if (deviceOrientation != true) {
        return;
    }

    if (!isMenuOpen) {
        sidebarMobileMenu[0].style.display = "flex";
        isMenuOpen = true;
    }
});


sidebarCloseButton[0].addEventListener("click", () => {
    if (deviceOrientation != true) {
        return;
    }

    if (isMenuOpen) {
        sidebarMobileMenu[0].style.display = "none";
        isMenuOpen = false;
    }
});


// If the height of the window is higher that width we aren't in landscape mode
// *NOTE:
// * I don't do something like screen.orientation or listen to events for maximum compatibility
function GetOrientation() {
    return window.innerHeight > window.innerWidth ? true : false;
}


window.onresize = function() {
    deviceOrientation = GetOrientation();
}