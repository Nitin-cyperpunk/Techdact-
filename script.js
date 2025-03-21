
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
        { title: "Web Development", details: "Our Web Technologies Courses provide a comprehensive learning path for beginners and professionals looking to master the art of web development. Dive into the core aspects of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Angular, Node.js, PHP, and more. With interactive lessons, real-world projects, and hands-on coding exercises, you'll gain the skills needed to build responsive and dynamic websites." },
        { title: "Cloud Computing", details: "Our Web Technologies Courses provide a comprehensive learning path for beginners and professionals looking to master the art of web development. Dive into the core aspects of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Angular, Node.js, PHP, and more. With interactive lessons, real-world projects, and hands-on coding exercises, you'll gain the skills needed to build responsive and dynamic websites." },
        { title: "Artificial Intelligence", details: "Our Web Technologies Courses provide a comprehensive learning path for beginners and professionals looking to master the art of web development. Dive into the core aspects of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Angular, Node.js, PHP, and more. With interactive lessons, real-world projects, and hands-on coding exercises, you'll gain the skills needed to build responsive and dynamic websites." },
        { title: "Java Full Stack", details: "Our Web Technologies Courses provide a comprehensive learning path for beginners and professionals looking to master the art of web development. Dive into the core aspects of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Angular, Node.js, PHP, and more. With interactive lessons, real-world projects, and hands-on coding exercises, you'll gain the skills needed to build responsive and dynamic websites." },
        { title: "Data Science", details: "Our Web Technologies Courses provide a comprehensive learning path for beginners and professionals looking to master the art of web development. Dive into the core aspects of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Angular, Node.js, PHP, and more. With interactive lessons, real-world projects, and hands-on coding exercises, you'll gain the skills needed to build responsive and dynamic websites." },
        { title: "Power BI", details: "Our Web Technologies Courses provide a comprehensive learning path for beginners and professionals looking to master the art of web development. Dive into the core aspects of front-end and back-end technologies, including HTML, CSS, JavaScript, React, Angular, Node.js, PHP, and more. With interactive lessons, real-world projects, and hands-on coding exercises, you'll gain the skills needed to build responsive and dynamic websites." }
    ];

    function updateBackground() {
        const currentSlide = slides[index];
        const imgSrc = currentSlide.querySelector('img').src;
        hero.style.backgroundImage = `url('${imgSrc}')`;
        console.log(`Background updated to: ${imgSrc}`); // Debugging line

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

    setInterval(nextSlide, 4000); // Change slide every 4 seconds
    updateBackground(); // Initial background update
});

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();


document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu'); // Assuming you want to hide the desktop menu too

    
    mobileMenu.classList.add('hidden');

    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');

       
        if(mainMenu){
            mainMenu.classList.add('hidden');
        }

    });

   
    function checkScreenWidth() {
        if (window.innerWidth >= 768) { 
            if (mainMenu) {
                mainMenu.classList.remove('hidden');
            }
            if (searchBar) {
                searchBar.classList.remove('hidden');
            }
            if (loginSignup) {
                loginSignup.classList.remove('hidden');
            }

        }else{
            if (mainMenu) {
                mainMenu.classList.add('hidden');
            }
            if (searchBar) {
                searchBar.classList.add('hidden');
            }
            if (loginSignup) {
                loginSignup.classList.add('hidden');
            }
        }
    }

    
    checkScreenWidth();

    
    window.addEventListener('resize', checkScreenWidth);
});
