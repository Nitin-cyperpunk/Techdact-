
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
        console.log(`Background updated to: ${imgSrc}`); 

       
        courseTitle.textContent = courseData[index].title;
        courseDetails.textContent = courseData[index].details;
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        const offset = -index * slides[0].offsetWidth;
        carousel.style.transform = `translateX(${offset}px)`;
        updateBackground();
    }

    setInterval(nextSlide, 4000); 
    updateBackground(); //
});

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
loco();


document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mainMenu = document.getElementById('main-menu');
    const searchBar = document.querySelector('.md\\:flex input[type="text"]');
    const loginSignup = document.getElementById('loginSignup');

    // Ensure the mobile menu is hidden initially
    mobileMenu.classList.add('hidden');

    // Toggle mobile menu visibility
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Function to check screen width and adjust visibility of elements
    function checkScreenWidth() {
        if (window.innerWidth >= 768) {
            if (mainMenu) {
                mainMenu.classList.remove('hidden');
            }
            if (searchBar) {
                searchBar.parentElement.classList.remove('hidden');
            }
            if (loginSignup) {
                loginSignup.classList.remove('hidden');
            }
            mobileMenu.classList.add('hidden'); // Hide mobile menu on larger screens
        } else {
            if (mainMenu) {
                mainMenu.classList.add('hidden');
            }
            if (searchBar) {
                searchBar.parentElement.classList.add('hidden');
            }
            if (loginSignup) {
                loginSignup.classList.add('hidden');
            }
        }
    }

    // Initial check and add event listener for window resize
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});


var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });