const navbar = document.getElementById("navbar");
const contactButton = document.getElementById("contactButton");
let isSticky = false;

function getNavPos() {
    return navbar.getBoundingClientRect().top + window.scrollY;
}

let navPos = getNavPos();

function handleScroll() {
    const scrollPos = window.scrollY;

    if (scrollPos > navPos && !isSticky) {
        navbar.classList.add("sticky");
        contactButton.classList.remove("color-button");
        isSticky = true;
    } else if (scrollPos <= navPos && isSticky) {
        navbar.classList.remove("sticky");
        contactButton.classList.add("color-button");
        
        isSticky = false;
    }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", () => {
    navPos = getNavPos();
});
window.addEventListener("load", () => {
    navPos = getNavPos();
});
