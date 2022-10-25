var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
    }
})

$('ul.directions__list').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.directions__content').removeClass('active').eq($(this).index()).addClass('active');
});

var swiperStaff = new Swiper(".mySwiperStaff", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
    }
})