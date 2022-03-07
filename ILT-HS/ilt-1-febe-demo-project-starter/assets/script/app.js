const drawerButton = document.querySelector("#drawerButton");
const drawerNavigation = document.querySelector("#drawerNavigation");
const main = document.querySelector("main");

drawerButton.addEventListener("click", () => {
  drawerNavigation.classList.toggle("open");
});

main.addEventListener("click", () => {
  drawerNavigation.classList.remove("open");
});

const navbar = document.querySelector("header");
window.onscroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
