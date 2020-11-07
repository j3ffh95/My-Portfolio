// /* This functions make the sidebar appear when is in mobile platform=============================== */

function openSlideMenu() {
  document.getElementById("side-menu").style.width = "200px";
  document.querySelector(".navbar a").style.display = "none";
  document.getElementById("main").style.marginLeft = "200px";
}

function closeSlideMenu() {
  document.querySelector(".navbar a").style.display = "block";
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// /* end of function =============================== */
