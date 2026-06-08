// Navbar Background Change

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.background="#000";

}

else{

navbar.style.background="rgba(0,0,0,0.4)";

}

});

// Form Submit

const form=document.querySelector(".contact-form");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Test Drive Booked Successfully 🚗");

form.reset();

});