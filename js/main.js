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
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");
// ----- services data (array objects) ------
const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored to your style.",
        image: "assets/images/feature-1.jpg"
    },
    {
        title: "Beard trim",
        text: "Shape and line-up your beard for a clean, sharp finish.",
        image: "assets/images/feature-2.jpg"
    },
    {
        title: "Staright Razor Shave",
        text: "Hot towel treatment with smooth traditional shave.",
        image: "assets/images/feature-3.jpg"
    }
];
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
// adds the is-scrolled class to the site-header DOM element
const handleHeaderOnScroll = () => {
    if (!siteHeader) return;
    if (window.scrollY > 10) {
        siteHeader.classList.add("is-scrolled");

    }else {
        siteHeader.classList.remove("is-scrolled");
    }
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
// 6) runds naavbar and makes sticky 
window.addEventListener("scroll", handleHeaderOnScroll);
// run once on page load in case user refreshers mid-scroll
handleHeaderOnScroll();

// render features using forEach ------
const renderFeatures = () => {
    if (!featureGrid) return;
    services.forEach(service => {
        const card = document.createElement("article");
        card.classList.add("feature-card");
        card.innerHTML = `
        <img src="${service.image}" alt="${service.title}" class="feature-img"
        />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        `; // template literals uses the `${}` and allows us to tostructure how we want our data returned
        featureGrid.appendChild(card);
    });
};
const renderFeauresMap = () => {
    const cardsHTML = services.map(service => {
        return `
        <article class="feature-card">
        <img src="${service.image}" alt="${service.title}" class="feature-img" />
        <h3 class="feature-title">${service.text}</p>
        </article>
        `
    }).join("");
    featureGrid.innerHTML = cardsHTML;
};

// --- render navigation using map() -----
const renderNavigation = () => {
    // desktop nav
    if (nav) {
        const navHTML = navLinks.map(linl => {
            return `
            <a href="${link.href}" class="nav-link">${link.label}</a>
            `}).join("");
            nav.innerHTML = navHTML;
    };
    // mobile nav
    if (mobileMenu) {
        const MobileHTML = navLinks.map(link => {
        return `
        <a href="${link.href} class="mobile-link">${link.label}</a>
        `}).join("");
        mobileMenu.innerHTML = MobileHTML;
    };
};
            
        

// array.map()
// -> returns HTML
// -> join("")
// -> insert into DOM
// our navagation now:
// comes from data
// updates instantly if the array changes 
// works in desktop + mobile
// uses modern JS patterns 

// This: navLinks.map(link =>....)
// is basically: 
// {navLinks.map(link =>....)} in React

// skill              concept 
//objects array       data structure
// map()              tarnsform data
// template literals  dynamic HTML
// DOM reading        UI regeneration


// ------ function calls ------
// renderFeatures();
renderFeauresMap();
renderNavigation();
// key teaching difference
// method                what happens
// forEach()             build element manually 
// map()                 returns HTML string
