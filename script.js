<script>
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByClassName('slide');
    const hero = document.getElementById('hero');
    let index = 0;
    const totalSlides = slides.length / 2; // Because of duplicated slides

    function updateBackground() {
        const currentSlide = slides[index];
        const imgSrc = currentSlide.querySelector('img').src;
        hero.style.backgroundImage = `url('${./slideshow/Vector_2640.jpg"}')`;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        const offset = -index * slides[0].offsetWidth;
        carousel.style.transform = `translateX(${offset}px)`;
        updateBackground();
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    updateBackground(); // Initial background update
});
</script>
