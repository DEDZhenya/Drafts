$(function() {
    var clock = $('.clock').FlipClock({
        clockface: 'TwelveHourClock'
    });
    $('.header__link-burger').on('click', function() {
        $('.rightsite__menu').removeClass('rightsite__menu--close')
        $('body').toogleClass('.lock')
    })
    $('.rightsite__menu-close').on('click', function() {
        $('.rightsite__menu').addClass('rightsite__menu--close')
    })
});