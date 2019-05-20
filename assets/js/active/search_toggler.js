(function($) {
    'use strict';

    function searchToggler() {
        var trigger = $('.search__active'),
            container = $('.search_active');
        trigger.on('click', function (e) {
            e.preventDefault();
            container.toggleClass('is-visible');
        });
        $('.close__wrap').on('click', function () {
            container.removeClass('is-visible');
        });
    }
    searchToggler();
})(jQuery);
