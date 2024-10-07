let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon'); // Fixed the selector for the menu-icon
let navbar = document.querySelector('.navbar');

// Navbar shadow on scroll
window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0)
});

// Toggle mobile menu
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Remove active states on scroll
window.onscroll = ()  => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active'); 
};

// Swiper for the home section
var homeSwiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000, // Reduced autoplay delay
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper for the coming section
var comingSwiper = new Swiper(".ccontainer", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 55000, // Reduced autoplay delay
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination", // Added pagination for the coming section
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
