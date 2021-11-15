const toggle_menu = document.querySelector("#mobile-menu");
const menu_link = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile menu
const mobileMenu = () => {
  toggle_menu.classList.toggle("is-active");
  menu_link.classList.toggle("active");
};

toggle_menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const skillsMenu = document.querySelector("#skills-page");
  let scrollPos = window.scrollY;

  // adds the highlight class to my menu items. change 600,1400,2345 by scrolling on finished website
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    skillsMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    skillsMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    skillsMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    homeMenu.menu.classList.remove("highlight");

    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

// Close mobile hamburger menu when clicking ona  menu item

const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 960 && menuBars) {
    toggle_menu.classList.toggle("is-active");
    menu_link.classList.remove("active");
  }
};

menu_link.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
