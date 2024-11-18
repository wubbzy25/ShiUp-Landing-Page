const hamburguer_menu = document.querySelector(".hamburguer-menu");
const hamburguer_menuIcon = document.querySelector(".hamburguer-menu span");
const dropdown_menu = document.querySelector(".dropdown_menu");

hamburguer_menu.addEventListener("click", function () {
  console.log("a");
  dropdown_menu.classList.toggle("open");

  const isOpen = dropdown_menu.classList.contains("open");
  hamburguer_menuIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});
