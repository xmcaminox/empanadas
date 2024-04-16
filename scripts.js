document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los slides
    var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;
    
    // Función para cambiar el slide cada 5 segundos
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Iniciar el slider
    setInterval(nextSlide, 4000);

});
