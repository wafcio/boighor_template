(function($) {
    'use strict';

    $('.slide__activation').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:1,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            1920:{
                items:1
            }
        }
    });
})(jQuery);
