document.addEventListener("DOMContentLoaded", function(){
var productBox = document.querySelectorAll(".products-box");
var dropdownMenu = document.querySelector(".dropdown-menu");
var dropdownMenuContent = document.querySelector(".dropdown-menu-content");
var images = document.querySelector(".slider").children;
var arrows = document.querySelectorAll(".arrow-box");
var next = arrows[0];
var prev = arrows[1];
var imgIndex = 0;

console.log(images);



for (var i = 0; i < productBox.length -1; i++) {
  productBox[i].addEventListener("mouseover", function(){
    this.querySelector(".transparent").style.display = "none";
  });
  productBox[i].addEventListener("mouseout", function(){
    this.querySelector(".transparent").style.display = "block";
  });
}

dropdownMenu.addEventListener("mouseover", function(){
  dropdownMenuContent.style.display = "block";
});
dropdownMenu.addEventListener("mouseout", function(){
  dropdownMenuContent.style.display = "none";
});


images[0].classList.add("visible");

next.addEventListener("click", function() {
  images[imgIndex].classList.remove("visible");
  imgIndex++;

  if (imgIndex < images.length) {
    images[imgIndex].classList.add("visible");

  } else {
    imgIndex = 0;
    images[imgIndex].classList.add("visible");
  }

});

prev.addEventListener("click", function() {
  images[imgIndex].classList.remove("visible");
  imgIndex--;

  if (imgIndex == -1) {
    imgIndex = images.length - 1;
    images[imgIndex].classList.add("visible");
  } else if (imgIndex >= 0) {
    images[imgIndex].classList.add("visible");
  }
});



});//Koniec
