const menu = document.querySelector(".nav__mobile");
const menu__show = document.querySelector(".menu__show");

menu.addEventListener("click", showMenu);
menu__show.addEventListener("click", hideMenu);

function showMenu() {
  menu__show.style.display = "flex";
}
function hideMenu() {
  menu__show.style.display = "none";
}
