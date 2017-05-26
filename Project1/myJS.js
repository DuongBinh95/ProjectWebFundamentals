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