// JavaScript to toggle the mobile menu
document
  .getElementById("mobile-menu-button")
  .addEventListener("click", function () {
    var menu = document.querySelector(".md\\:hidden");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
