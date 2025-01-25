$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');

    //owl carousel testimonial slider
$('.owl-testimonial-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:2,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
        0: {items: 1},
        577: {items: 1},
        768: {items: 2},
        991: {items: 2},
        1024: {items: 2}
    }
});


}(jQuery));