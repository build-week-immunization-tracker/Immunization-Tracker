
// const openButton = document.querySelector(".fa-vial");

// openButton.addEventListener("click", function(){
//     document.getElementById("navMenu").style.width = "250px";
// });

// const closeButton = document.querySelector(".closebtn");

// closeButton.addEventListener("click", function(){
//     document.getElementById("navMenu").style.width = "0px";
// });

const menu = $(".mobile-links");

$(".border").click(function(){
  if(menu.is(":visible")){
    menu.slideUp("slow");
  } else {
    menu.slideDown("slow");
  }
});