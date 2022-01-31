// 28 - Jan - 2022 

const goToTop = document.getElementById('goToTop');
const menuBtn = document.getElementById('menu-btn');
const loginBtn = document.getElementById('login-btn');
const themeBtn = document.getElementById('theme-btn');
const searchBtn = document.getElementById('search-btn');
const creatUser = document.getElementById('creatUser');
const haveAccount = document.getElementById('haveAccount');


const body = document.body;
const naveBar = document.querySelector('.navbar');
const loginForm = document.querySelector('.login-form');
const searchForm = document.querySelector('.search-form');
const scrollIndicator = document.querySelector('.scroll-indicator');
const userCreatingFrom = document.querySelector('.user-creating-form');


// Only For Color Switching Purpose
const root = document.querySelector(':root');
const switchBtn = document.querySelector('.switchBtn');
const allThemeBtn = document.querySelectorAll('.themeBtn');
const colorSwitcher = document.querySelector('.colorSwitcher');



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
    colorSwitcher.classList.remove('userClick');
});

// login btn
loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('userClick');

    if (userCreatingFrom.classList.contains('crate-account')) {
        userCreatingFrom.classList.toggle('hide');
    }

    naveBar.classList.remove('userClick');
    searchForm.classList.remove('userClick');
    colorSwitcher.classList.remove('userClick');
});

// Search btn
searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('userClick');
    loginForm.classList.remove('userClick');
    loginForm.classList.remove('have-account');
    userCreatingFrom.classList.remove('crate-account');
    naveBar.classList.remove('userClick');
    colorSwitcher.classList.remove('userClick');

});

// Theme toggle btn
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


    // calculate user screen view portions...
    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY / maxHeight)) * 100;

    // at HTML horizontal bar display show incrementally... 
    scrollIndicator.style.width = percentage + '%';


    // condition - for showing upper arrow 
    if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        goToTop.style.transform = "scale(1)";
    } else {
        goToTop.style.transform = "scale(0)";
    }

});


goToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});


// Font Color Changer
/*****************************************************************
******************************************************************
******************************************************************/

switchBtn.addEventListener('click', () => {

    // just Open & Close color drawer
    colorSwitcher.classList.toggle('userClick');

    naveBar.classList.remove('userClick');
    loginForm.classList.remove('userClick');
    loginForm.classList.remove('have-account');
    userCreatingFrom.classList.remove('crate-account');
    searchForm.classList.remove('userClick');

    // clicking upon any color
    allThemeBtn.forEach(btn => {

        // clicking upon selected color
        btn.addEventListener('click', () => {

            let dataColor = btn.getAttribute('data-color');
            root.style.setProperty('--orange', dataColor);
            // root.style.setProperty('--orange', btn.style.backgroundColor);
        })
    });
});
/*****************************************************************
******************************************************************
******************************************************************/




// SVG color injector + AOS loader
/*****************************************************************
******************************************************************
******************************************************************/
SVGInject(document.querySelectorAll("img.injectable"));

AOS.init({
    startEvent: 'load',
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    // offset: 120, // offset (in px) from the original trigger point
    delay: 400, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    // easing: 'ease', // default easing for AOS animations
    // once: false, // whether animation should happen only once - while scrolling down
    // mirror: false, // whether elements should animate out while scrolling past them
    // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation      
})

// window.addEventListener('load', () => {
//     AOS.refresh();
// });
/*****************************************************************
******************************************************************
******************************************************************/

// DISABLE the RIGHT CLICK for viewing the ==> View Page Source Code
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);


// DISABLE SHORTCUT KEY
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.keyCode==123) {
        e.stopPropagation();
        e.preventDefault();
    }
}, false);








// swiper-slider functionality... 
/*****************************************************************
******************************************************************
******************************************************************/
let swiper = new Swiper('.review-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // centeredSlides: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        // type: "fraction",
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
/*****************************************************************
******************************************************************
******************************************************************/