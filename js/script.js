document.addEventListener("DOMContentLoaded", function(){
var productBox = document.querySelectorAll(".products-box");
var transparent = document.querySelectorAll(".transparent");
console.log(transparent);

for (var i = 0; i < productBox.length -1; i++) {
  productBox[i].addEventListener("mouseover", function(){
    this.querySelector(".transparent").style.display = "none";
  });
  productBox[i].addEventListener("mouseout", function(){
    this.querySelector(".transparent").style.display = "block";
  });
}





});//Koniec
