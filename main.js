let blurheader = () => {
    let headerInner = document.getElementById('header__inner');

    if (window.scrollY >= 50) {
        headerInner.classList.add('blur-header');
    } else {
        headerInner.classList.remove('blur-header');
    }
};

window.addEventListener('scroll', blurheader);

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
    menu.classList.toggle('menu__btn--active');
});



        const swiperTop = new Swiper('.top__swiper', {
            effect: "fade",
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
        
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        });





        const swiperAbout = new Swiper(".about__slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
        });
          
document.querySelectorAll('.accordion__trigger').forEach((item) => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordion__item--active')
    })
});




