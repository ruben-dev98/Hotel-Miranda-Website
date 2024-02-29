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

const rooms__details__swiper = new Swiper('.room-details__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.room-details__swiper-button-next',
        prevEl: '.room-details__swiper-button-prev',
    }
});

const offers__swiper = new Swiper('.offers__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.offers__swiper-button-next',
        prevEl: '.offers__swiper-button-prev',
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

const menus__foods__swiper = new Swiper('.menu-foods__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,

    navigation: {
        nextEl: '.menu-foods__swiper-button-next',
        prevEl: '.menu-foods__swiper-button-prev',
    },

    breakpoints: {
        1000: {
            slidesPerView: 2,
        }
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

    breakpoints: {
        1000: {
            slidesPerView: 3,
            spaceBetween: 50,

            grid: {
                rows: 2,
                fill: 'row'
            }
        }
    }
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

