jQuery(document).ready(function($) {
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $("#contactsPhone").mask("+73 (99)999-99-99", {placeholder: ""});
});