$(document).ready(function(){
    // Función para cambiar el slide cada 5 segundos
    function nextSlide() {
        var slides = $('.slide');
        var currentSlide = $('.slide.active').index();
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides.eq(currentSlide).addClass('active');
    }

    // Iniciar el slider
    setInterval(nextSlide, 5000);
});
