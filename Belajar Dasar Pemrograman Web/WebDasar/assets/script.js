const menuDropdown = document.querySelector(".menu-drop");
function showDropdown() {
  if (menuDropdown.classList.contains("hide")) {
    menuDropdown.classList.remove("hide");
    menuDropdown.classList.add("show");
  } else {
    menuDropdown.classList.remove("show");
    menuDropdown.classList.add("hide");
  }
}

const btn = document.querySelector("button.btn-drop");
const links = document.querySelectorAll(".menu-drop a");

btn.addEventListener("click", showDropdown);

for (const link of links) {
  link.addEventListener("click", showDropdown);
}
