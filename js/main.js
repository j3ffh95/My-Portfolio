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

// /* JQUERY FUNCTION FOR GALLERY =============================== */

$(document).ready(function () {
  $(".next").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });
});
// /* END OF JQUERY FUNCTION FOR GALLERY =============================== */
