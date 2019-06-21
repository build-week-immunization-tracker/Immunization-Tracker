
const openButton = document.querySelector(".fa-vial");

openButton.addEventListener("click", function(){
    document.getElementById("navMenu").style.width = "250px";
});

const closeButton = document.querySelector(".closebtn");

closeButton.addEventListener("click", function(){
    document.getElementById("navMenu").style.width = "0px";
});