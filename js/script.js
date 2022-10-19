const header = document.querySelector("header");
const black = document.querySelector(".black");
const white = document.querySelector(".white");


window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
	white.classList.toggle ("visibility", window.scrollY > 0);
	black.classList.toggle ("visibility", window.scrollY == 0);

});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};