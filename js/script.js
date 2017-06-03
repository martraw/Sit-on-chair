document.addEventListener("DOMContentLoaded", function(){
var productBox = document.querySelectorAll(".products-box");
var dropdownMenu = document.querySelector(".dropdown-menu");
var dropdownMenuContent = document.querySelector(".dropdown-menu-content");
var images = document.querySelector(".slider").children;
var arrows = document.querySelectorAll(".arrow-box");
var next = arrows[0];
var prev = arrows[1];
var imgIndex = 0;

// console.log(images);


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


//---------------- Calculator------------------

var dropdownArrow = document.querySelectorAll(".list_arrow");
var list_model = document.querySelectorAll(".list_panel")[0];
var list_colors = document.querySelectorAll(".list_panel")[1];
var list_material = document.querySelectorAll(".list_panel")[2];
var transportTickBox = document.querySelector("#transport");
var priceElements = document.querySelector(".panel_right");

console.log(list_model.children[1]);

for (var i = 0; i < dropdownArrow.length; i++) {
  dropdownArrow[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("visible");
  });
}

var selection = function(list, destination){

  for (var i = 0; i < list.children.length; i++) {
    list.children[i].addEventListener("click", function(){
      document.querySelector(".panel_left " + "."+destination+"").innerHTML = this.innerHTML;

      document.querySelector(".panel_right " + "."+destination+"").innerHTML = this.dataset.price + " zł";
      this.parentNode.classList.toggle("visible");
      sumUp();
    });
  }
};

transportTickBox.addEventListener("click", function(){
  if (!transportTickBox.checked) {
    document.querySelector(".panel_left .transport").innerHTML = "Odbiór osobisty";

    document.querySelector(".panel_right .transport").innerHTML = "0 zł";
  } else {
    document.querySelector(".panel_left .transport").innerHTML = "Transport";

    document.querySelector(".panel_right .transport").innerHTML = transportTickBox.dataset.transportPrice + " zł";
  }
  sumUp();
});

var sumUp = function(){
  var totalPrice = 0;
  for (var i = 0; i < priceElements.children.length; i++) {
    if (priceElements.children[i].innerHTML !== "") {
      totalPrice += parseInt(priceElements.children[i].innerHTML);
    }
  }
  document.querySelector(".sum strong").innerHTML = totalPrice + " zł";
};

selection(list_model, "title");
selection(list_colors, "color");
selection(list_material, "fabric");
});//Koniec
