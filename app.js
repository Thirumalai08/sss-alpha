const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})



var carousel = function(){
    $('#services-slider').owlCarousel({
        center:true,
			loop:true,
			autoplay:true,
			autoplayTimeout:4000,
			autoplayHoverPause:false,
			items:1,
			margin:30,
			stagePadding:0,
			nav:false,
			dots: false,
			responsive:{
				0:{
					items: 1
				},
				600:{
                    items: 2,
                    margin: 80
				},
				1000:{
					items: 3
				}
			}
        /*center: true,
        items: 3,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items:1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }*/
    })
    // logo slider
    $('#logo-slider').owlCarousel({
        center: true,
        item: 4,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768:{
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
}
carousel()

function prealoader () {
    if ($('#loader').length) {
      $('#loader').fadeOut(); // will first fade out the loading animation
      $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(350).css({'overflow':'visible'});
   };
  }
jQuery(window).on('load',function(){
    (function($){
        prealoader()
    })(jQuery)
})