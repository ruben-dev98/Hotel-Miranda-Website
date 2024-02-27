const rooms__swiper = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.rooms__swiper-button-next',
        prevEl: '.rooms__swiper-button-prev',
    }
});

const menus__swiper = new Swiper('.menu__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.menu__swiper-pagination',
    }
});


const facilities__swiper = new Swiper('.facilities__swiper', {
    // Optional parameters
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.facilities__swiper-pagination',
    },

    breakpoint: {
        1000: {
            slidesPerView: 6,
            slidesPerColumn: 1,
            slidesPerGroup: 3
        }
    },

    on: {
        init: function () {},
        orientationchange: function () {},
        beforeResize: function () {
            let vw = window.innerWidth;
            if (vw > 1000) {
                facilities__swiper.params.slidesPerView = 6;
                facilities__swiper.params.spaceBetween= 30;
                
            } else {
                facilities__swiper.params.slidesPerView = 1;
                facilities__swiper.params.slidesPerColumn = 1;
                facilities__swiper.params.slidesPerGroup = 1;
            }
            facilities__swiper.init();
        },
    },
});

/*const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        init: function () { },
        orientationchange: function () { },
        beforeResize: function () {
            let vw = window.innerWidth;
            if (vw > 1000) {
                mySwiper.params.slidesPerView = 3
                mySwiper.params.slidesPerColumn = 3
                mySwiper.params.slidesPerGroup = 3;
            } else {
                mySwiper.params.slidesPerView = 4
                mySwiper.params.slidesPerColumn = 2
                mySwiper.params.slidesPerGroup = 4;
            }
            mySwiper.init();
        },
    },
});*/

