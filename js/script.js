var Typed = new Typed (".input", {
    strings : ["Theo TOURVILLE.", "Développeur web."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function () { 
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});