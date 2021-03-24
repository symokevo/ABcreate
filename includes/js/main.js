//swiper section js

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    scrollToSlide: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 3,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});




(function ($) {

    "use strict";

    /* Preloader
     * -------------------------------------------------- */
    var clPreloader = function () {

        $("html").addClass('cl-preload');

        $WIN.on('load', function () {

            //force page scroll position to top at page refresh
            $('html, body').animate({
                scrollTop: 0
            }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');

        });
    };



    /* Initialize
     * ------------------------------------------------------ */
    (function clInit() {

        clPreloader();

    })();

})(jQuery);
// services
const revealText = ()=> {
    const designHeader = document.querySelector('.design-header');
    const headerPosition = designHeader.getBoundingClientRect().top;
    const designText = document.querySelector('.design-text');
    const textPosition = designText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight/2.4;

    if(headerPosition < screenPosition){
        designHeader.classList.add('head-reveal');
    }
    if(textPosition<screenPosition){
        designText.classList.add('designtext-reveal');
    }
}

window.addEventListener('scroll', revealText);