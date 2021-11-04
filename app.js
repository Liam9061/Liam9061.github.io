const toggle_menu = document.querySelector("#mobile-menu");
const menu_link = document.querySelector(".navbar__menu");

// Display Mobile menu
const mobileMenu = () => {
  toggle_menu.classList.toggle("is-active");
  menu_link.classList.toggle("active");
};

toggle_menu.addEventListener("click", mobileMenu);
