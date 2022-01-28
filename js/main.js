$(function() {
    $('.photo__slider').slick({
        // arrows: false,
        prevArrow: '<button type = "button" class = "slick-prev">  <img src="image/arrow-left.svg" alt=""> </ button>',
        nextArrow: '<button type = "button" class = "slick-next">  <img src="image/arrow-right.svg" alt=""> </ button>'
    });
    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });
});