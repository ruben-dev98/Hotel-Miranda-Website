const rooms__swiper = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // Navigation arrows
    navigation: {
        nextEl: '.rooms__swiper-button-next',
        prevEl: '.rooms__swiper-button-prev',
    },

    mousewheel: {
        enabled: true
    }
});

const menus__swiper = new Swiper('.menu__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.menu__swiper-pagination',
    },

    mousewheel: {
        enabled: true
    }
});


const facilities__swiper = new Swiper('.facilities__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.facilities__swiper-pagination',
    },

    mousewheel: {
        enabled: true
    }
});