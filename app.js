const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})



var carousel = function(){
    $('#services-slider').owlCarousel({
        center: true,
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
        }
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
                items: 1,
                center: true
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