window.onload = function(){
	$(".owl-carousel").owlCarousel({
		loop: false,
    margin: 10,
    nav: true,
    responsive: {
        0:{
            items:1
        },
        600:{
            items:2
        }
    }
	});
};