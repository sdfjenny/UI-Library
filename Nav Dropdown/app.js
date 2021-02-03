const mq = window.matchMedia("(max-width: 768px)");
const mqIpadLandscape = window.matchMedia("(max-width: 1024px)");

const mainNav = document.getElementById("main-nav");
const submenu1 = document.querySelectorAll(".main-nav__submenu-1");
const submenu2 = document.querySelectorAll(".main-nav__submenu-2");
const hasSubmenu = document.querySelectorAll(".has-submenu");
const hasSubmenu2 = document.querySelectorAll(".has-submenu-2");
const menuIcon = document.getElementById("menu-icon");

function showSubmenu(item, index) {
  item.addEventListener("click", function () {
    submenu1[index].classList.toggle("display-block");
  });
}

function showSubmenu2(item, index) {
  item.addEventListener("click", function () {
    submenu2[index].classList.toggle("display-block");
  });
}

if (mq.matches) {
  menuIcon.addEventListener("click", function () {
    if (mainNav.style.display != "block") {
      mainNav.style.display = "block";
      this.innerHTML = "X";
    } else {
      mainNav.style.display = "none";
      this.innerHTML = "MENU";
    }

    hasSubmenu.forEach(showSubmenu);

    hasSubmenu2.forEach(showSubmenu2);
  });
} else if (mqIpadLandscape.matches) {
  console.log("true1024");
  hasSubmenu.forEach(showSubmenu);
  hasSubmenu2.forEach(showSubmenu2);
}
