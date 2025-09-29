const slides = document.querySelectorAll('.slide');
let slideActual = 0;

function showSlide(index){
slideActual = index % slides.length;
const offset = -slideActual *100;
document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
   
}

setInterval (() => showSlide(slideActual + 1), 4000);