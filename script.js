
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByClassName('slide');
    const hero = document.getElementById('hero');
    let index = 0;
    const totalSlides = slides.length; // Because of duplicated slides

    function updateBackground() {
        const currentSlide = slides[index];
        const imgSrc = currentSlide.querySelector('img').src;
        hero.style.backgroundImage = `url('${imgSrc}')`;
        console.log(`Background updated to: ${imgSrc}`); // Debugging line
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        const offset = -index * slides[0].offsetWidth;
        carousel.style.transform = `translateX(${offset}px)`;
        updateBackground();
    }

    setInterval(nextSlide, 4000); // Change slide every 4 seconds
    updateBackground(); // Initial background update
});

