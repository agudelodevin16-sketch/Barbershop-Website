//  =====================
// file: js/main.js
// vintage barbershop project
// =========================
// ----- DOM Elemnts ----------
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
// ------ helper / functions -----------
// update footer year automatically
const setCurrentYear = () => {
    const now = new Date(); // stores in the vaiable now the year/month/day/hour/minute/second/milisecond from when the function was called
    yearEl.textContent = now.getFullYear();
};
// toggle mobile menu open/close
let isMenuOpen = false;
const toggleMobileMenu = () => {
    if (!mobileMenu) return; // stop clause; if mobileMenu doesn't exist return nothing 
    if (isMenuOpen === false) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
    menuBtn.setAttribute("aria-expanded", String(isMenuOpen));
    menuBtn.setAttribute("aria-label", isMenuOpen ? "Close menu" : "Open menu");
};
// close mobile menu (used when a link is clicked)
const closeMobileMenu = () => {
    if (!mobileMenu) return; // if the mobileMenu doesn't exist return nothing
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
    if (menuBtn) {
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open menu");
    }
};
// --- reusable function with parameters (practice pattern)
const updateHeadingText = (newText) => {
    if (!heading) return; 
    heading.textContent = newText;
};
// ----- event listeners -------
// 1) set year on page load
setCurrentYear();
// 2) hamburguer menu toggle
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
};
// 3) close mobile menu when a mobile link is clicked (event delagation)
if (mobileMenu) {
    mobileMenu.addEventListener("click", (event) => {
      // if they clicked an <a> inside the menu, close it
        if (event.target.tagName === "A") { // tagName returns the tag name as a capital letters so event.target.tagName returns "A" so the other side of the === must be "A"
            closeMobileMenu();
        }
    });
};
// 4) CTA Button: "Book now" (placeholder behavior)
if (ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        updateHeadingText("Booking coming next - great choice!");
    });
}
// 5) call button: try to use the phone number in the footer
if (callBtn) {
callBtn.addEventListener("click", () => {
    // If you later set phoneLink href to tel:, this will work perfectly.
    // For now, this is a beginner-friendly placeholder.
    if (phoneLink) {
        updateHeadingText("Call us at " + phoneLink.textContent);
    } else {
        updateHeadingText("Call feature coming next!");
    }
});
}
