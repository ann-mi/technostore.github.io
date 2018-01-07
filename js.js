$(document).ready(function () {
    $(".header_ham").click(function () {
        $(this).toggleClass("active");
        $('.header_menu_list li ul li').removeClass('open');
        $('.header_menu_list li ul').removeClass('active');
        $('.header_menu_nav').toggleClass('active');
    });
    $(".header_menu_list li ul").click(function () {
        $(this).toggleClass("active");
        $(this).find('li').toggleClass('open');
    });
    $('.footer_tab_title').click(function () {
        $(this).parent().find('.footer_nav').slideToggle();
        $(this).toggleClass('active');
    });
    $('.header_menu_title').click(function () {
        $('.header_menu_list').slideToggle()
    });
    $('.main-slider').slick({
        autoplay: true,
        dots: true
    });
    $('.main_popular_slider').slick({
        // autoplay: true,
        dots: true,
        arrows: false
    });
    $('.brand_slider').slick({
        // autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 3
    });
    $('.notes_slider').slick({
        // autoplay: true,
        arrows: false,
        slidesToShow: 1,
        dots: true
    });
    $('.viewed_product_slider').slick({
        // autoplay: true,
        arrows: false,
        slidesToShow: 2,
        dots: true
    });
});

if(window.matchMedia('(min-width: 768px)').matches)
{
    $('.main_popular_slider').slick({
        // autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 4
    });
    $('.brand_slider').slick({
        // autoplay: true,
        dots: false,
        arrows: false,
        slidesToShow: 4
    });
    $('.notes_slider').slick({
        // autoplay: true,
        arrows: false,
        slidesToShow: 4,
        dots: false
    });
    $('.viewed_product_slider').slick({
        // autoplay: true,
        arrows: false,
        slidesToShow: 4,
        dots: false
    });
}
//# sourceMappingURL=js.js.map
