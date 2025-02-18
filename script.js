
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByClassName('slide');
    const hero = document.getElementById('hero');
    const courseTitle = document.getElementById('course-title');
    const courseDetails = document.getElementById('course-details');
    const enrollButton = document.getElementById('enroll-button');
    let index = 0;
    const totalSlides = slides.length;

    const courseData = [
        { title: "Web Development", details: "Details about Course 1." },
        { title: "Cloud Computing", details: "Details about Course 2." },
        { title: "Artificial Integience", details: "Details about Course 3." },
        { title: "java full stake", details: "Details about Course 4." },
        { title: "Data Science", details: "Details about Course 5." },
        { title: "Power BI", details: "Details about Course 6." }
    ];

    function updateBackground() {
        const currentSlide = slides[index];
        const imgSrc = currentSlide.querySelector('img').src;
        hero.style.backgroundImage = `url('${imgSrc}')`;
        console.log(`Background updated to: ${imgSrc}`); 

        // Update text content
        courseTitle.textContent = courseData[index].title;
        courseDetails.textContent = courseData[index].details;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        const offset = -index * slides[0].offsetWidth;
        carousel.style.transform = `translateX(${offset}px)`;
        updateBackground();
    }

    setInterval(nextSlide, 5000); 
    updateBackground(); 
});

