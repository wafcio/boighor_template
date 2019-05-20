(function($) {
    'use strict';

    function cartToggler() {
        var trigger = $('.cartbox_active'),
            container = $('.minicart__active');
        trigger.on('click', function (e) {
            e.preventDefault();
            container.toggleClass('is-visible');

        });
        trigger.on('click', function (e) {
            e.preventDefault();
            container.toggleClass('');

        });
        $('.micart__close').on('click', function () {
            container.removeClass('is-visible');
        });
    }
    cartToggler();
})(jQuery);
