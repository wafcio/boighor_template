(function($) {
    'use strict';

    function settingToggler() {
        var settingTrigger = $('.setting__active'),
            settingContainer = $('.setting__block');
        settingTrigger.on('click', function (e) {
            e.preventDefault();
            settingContainer.toggleClass('is-visible');
        });
        settingTrigger.on('click', function (e) {
            e.preventDefault();
            settingContainer.toggleClass('');
        });
    }
    settingToggler();
})(jQuery);
