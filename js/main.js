var menu = document.getElementById("ham-menu");
var bars = document.getElementById("bars");
var body = document.getElementById("body");
var slideMenu = document.getElementById("mainMenu");
// var slideMenu = document.getElementsByTagName("nav");
var clicked = true;

// Click Effect
menu.addEventListener("click", activate);
function activate(){
  if (clicked){
    console.log("click")
    bars.classList.add("animation");
    slideMenu.classList.add("menuSlide");
    slideMenu.classList.remove("reverseMenuSlide");
    clicked = false;
  } else {
    bars.classList.remove("animation");
    slideMenu.classList.remove("menuSlide");
    slideMenu.classList.add("reverseMenuSlide");
    clicked = true;
  }
}

console.log("loaded")

$('.parallax').parallax({
      imageSrc: 'http://www.allwhitebackground.com/images/2/2278-190x190.jpg'
    });