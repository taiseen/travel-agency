// 28 - Jan - 2022 

const menuBtn = document.getElementById('menu-btn');
const loginBtn = document.getElementById('login-btn');
const themeBtn = document.getElementById('theme-btn');
const searchBtn = document.getElementById('search-btn');
const creatUser = document.getElementById('creatUser');
const haveAccount = document.getElementById('haveAccount');

const body = document.body;
const naveBar = document.querySelector('.navbar');
const loginForm = document.querySelector('.login-form');
const userCreatingFrom = document.querySelector('.user-creating-form');
const searchForm = document.querySelector('.search-form');


creatUser.addEventListener('click', () => {
    loginForm.classList.add('have-account');
    userCreatingFrom.classList.add('crate-account');
});

haveAccount.addEventListener('click', () => {
    loginForm.classList.remove('have-account');
    userCreatingFrom.classList.remove('crate-account');
});

// Menu btn
menuBtn.addEventListener('click', () => {
    naveBar.classList.toggle('userClick');
    loginForm.classList.remove('userClick');
    loginForm.classList.remove('have-account');
    userCreatingFrom.classList.remove('crate-account');
    searchForm.classList.remove('userClick');
});

// login btn
loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('userClick');

    if (userCreatingFrom.classList.contains('crate-account')) {
        userCreatingFrom.classList.toggle('hide');
    } 
    
    naveBar.classList.remove('userClick');
    searchForm.classList.remove('userClick');
});

// Search btn
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('userClick');
    loginForm.classList.remove('userClick');
    loginForm.classList.remove('have-account');
    userCreatingFrom.classList.remove('crate-account');
    naveBar.classList.remove('userClick');

});

// Theme btn
themeBtn.addEventListener('click', () => {
    themeBtn.children[0].classList.toggle('fa-sun');
    body.classList.toggle('userClickThemeToggle');
});


window.addEventListener('scroll', () => {
    searchForm.classList.remove('userClick');
    loginForm.classList.remove('userClick');
    loginForm.classList.remove('have-account');
    userCreatingFrom.classList.remove('crate-account');
    naveBar.classList.remove('userClick');
});


// swiper-slider functionality... 

let swiper = new Swiper('.reviews-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

});