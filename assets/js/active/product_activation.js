(function($) {
    'use strict';

    /*=============  Produst Activation  ==========*/
    $('.productcategory__slide').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            992:{
                items:4
            },
            768:{
                items:3
            },
            576:{
                items:2
            },
            1920:{
                items:4
            }
        }
    });


    /*=============  Produst Activation  ==========*/
    $('.productcategory__slide--2').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:3,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            1920:{
                items:3
            }
        }
    });


    /*=============  Product Activation ============*/
    $('.product__indicator--4').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1920:{
                items:4
            }
        }
    });


    /*=============  Product Activation  ==============*/
    $('.furniture--4').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        autoplay: false,
        autoplayTimeout: 10000,
        items:4,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>' ],
        dots: false,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1920:{
                items:4
            }
        }
    });
})(jQuery);
