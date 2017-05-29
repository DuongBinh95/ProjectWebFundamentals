/**
 * Created by duong on 5/17/17.
 */

$( document ).ready(function() {
    $(window).scroll(function(){
        if ($(this).scrollTop() > 75) {
            $('.nav-menu').addClass('fixed-menu');
        } else {
            $('.nav-menu').removeClass('fixed-menu');
        }
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})