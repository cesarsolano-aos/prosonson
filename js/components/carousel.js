console.log("Iniciando Carousel");

const carousel = document.getElementById('carousel');
const wrapper = carousel.children[0];
const items = wrapper.children;
const buttonPrev = carousel.children[1].children[0];
const buttonNext = carousel.children[1].children[1];
const dotsContainer = carousel.children[2];

let carouselIndex = 0;

/* 
	[ imagen 1 ] = 0
	[ imagen 2 ] = 1
	[ imagen 3 ] = 2
*/

function mostrarAnterior () {
	carouselIndex = (carouselIndex - 1 + items.length) % items.length;
	console.log(carouselIndex);
}

function mostrarSiguiente () {
	carouselIndex = (carouselIndex + 1) % items.length;
}

buttonPrev.addEventListener('click', mostrarAnterior);
