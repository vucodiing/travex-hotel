// counter
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// inside hotel
$('.hotel__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.hotel__button'
});
$('.hotel__button').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.hotel__img',
    centerMode: true,
    focusOnSelect: true
});

// review
$('.review__content').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});