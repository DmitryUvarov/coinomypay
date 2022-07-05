
if (document.querySelector('.slider')) {
    new Swiper('.slider', {
        observer: true,
        observerParents: true,
        slidesPerView: 3,
        spaceBetween: 30,
        watchOverflow: true,
        speed: 800,
        loop: true,
        watchOverflow: true,
        // Dotts
        pagination: {
            el: '.slider',
            clickable: true,
        },
        // Arrows
        navigation: {
            nextEl: '.slider .slider-arrow_next',
            prevEl: '.slider .slider-arrow_prev',
        },
        /*
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.1,
                spaceBetween: 15
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 32
            }
        }*/
    });
}