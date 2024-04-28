let menu = document.querySelector(".menu");
let toggleMenu = document.querySelector(".toggle-menu");
let boolean = true;
// menu.style.transition = "height 0.5s";

window.onresize = function () {
  if (document.body.clientWidth > 970) {
    menu.style.transition = "height 0s";
    menu.style.height = "0px";
    boolean = true;
  }
};
toggleMenu.onclick = function () {
  if (boolean == false) {
    menu.style.height = "0px";
    boolean = true;
  } else {
    menu.style.height = "320px";
    boolean = false;
  }
};

//  Handling tabs
let tabsSection = document.getElementById("tabs");
let tabs = Array.from(tabsSection.children);
let allDiv = document.getElementById("main-content-section");
let contentDiv = Array.from(allDiv.children);

tabs.forEach((e) => {
  e.onclick = () => {
    tabs.forEach((el) => {
      el.classList.remove("active");
    });
    e.classList.add("active");
    contentDiv.forEach((div) => {
      div.classList.remove("active");
      if (e.classList.contains("tab-1")) contentDiv[0].classList.add("active");
      if (e.classList.contains("tab-2")) contentDiv[1].classList.add("active");
      if (e.classList.contains("tab-3")) contentDiv[2].classList.add("active");
    });
  };
});
