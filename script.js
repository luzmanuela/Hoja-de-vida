let currentIndex = 0;
const slides = document.querySelectorAll('.carrusel-slide');

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function avanzar() {
    currentIndex = (currentIndex + 1) % slides.length;
    mostrarSlide(currentIndex);
}

function retroceder() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    mostrarSlide(currentIndex);
}

mostrarSlide(currentIndex);
setInterval(avanzar, 15000); // Cambia de slide cada 5 segundos (ajusta según tu preferencia)
