// This is linking the correct names to the html names that already exist
const button = document.querySelector(".menu-button");
const navSection = document.querySelector("#primary-nav");

// Setting an attribute so menu and button are linked to each other in actions
//data set provides access to the custom data attributes in CSS
//

function MenuOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    navSection.dataset.state = open ? "open": "closed";
}
// This button is so the menu bbutton can show.
//hidden hides button so with it being false, the button appears
button.hidden = false;
MenuOpen(false);
// Clicking the menu bring down the other navigational sections

button.addEventListener("click", () => {
    const openIt =button.getAttribute("aria-expanded") === "true";
    MenuOpen(!openIt);
});

// Selecting a link from the navigation closed the menu and resets it
navSection.addEventListener("click", () => {
    MenuOpen(false);
});

// Pressing escape on keyboard closed menu button.
document.addEventListener("keydown", (event) => {
    const openIt = button.getAttribute("aria-expanded") === "true";
    if (event.key === "Escape" && openIt) {
        MenuOpen(false);
        button.focus();
    }
});


// TODO 1: progressively enhance the document and initialize the narrow state.

// TODO 2: write one named function that keeps aria-expanded and visible state synchronized.

// TODO 3: use the native button's click event to toggle the state.

// TODO 4: close on Escape when open, then return focus to the button.

// Add a comment above every logical step explaining what it does and why it is needed.
