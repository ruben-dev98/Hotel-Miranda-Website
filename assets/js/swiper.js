const rooms__swiper = new Swiper('.rooms__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.rooms__swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.rooms__swiper-button-next',
        prevEl: '.rooms__swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.rooms__swiper-scrollbar',
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

    // Navigation arrows
    navigation: {
        nextEl: '.menu__swiper-button-next',
        prevEl: '.menu__swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.menu__swiper-scrollbar',
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

    // Navigation arrows
    navigation: {
        nextEl: '.facilities__swiper-button-next',
        prevEl: '.facilities__swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.facilities__swiper-scrollbar',
    },

    mousewheel: {
        enabled: true
    }
});