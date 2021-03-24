(function($) {

    "use strict";
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
    },

    $WIN = $(window);

    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    /* Move header
    * -------------------------------------------------- */
   var clMoveHeader = function () {

    var hero = $('.page-hero'),
        hdr = $('header'),
        triggerHeight = hero.outerHeight() - 170;


    $WIN.on('scroll', function () {

        var loc = $WIN.scrollTop();

        if (loc > triggerHeight) {
            hdr.addClass('sticky');
        } else {
            hdr.removeClass('sticky');
        }

        if (loc > triggerHeight + 20) {
            hdr.addClass('offset');
        } else {
            hdr.removeClass('offset');
        }

        if (loc > triggerHeight + 150) {
            hdr.addClass('scrolling');
        } else {
            hdr.removeClass('scrolling');
        }

    });

    // $WIN.on('resize', function() {
    //     if ($WIN.width() <= 768) {
    //             hdr.removeClass('sticky offset scrolling');
    //     }
    // });

};


/* Mobile Menu
 * ---------------------------------------------------- */ 
var clMobileMenu = function() {

    var toggleButton = $('.header-menu-toggle'),
        nav = $('.header-nav-wrap');

    toggleButton.on('click', function(event){
        event.preventDefault();

        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();
    });

    if (toggleButton.is(':visible')) nav.addClass('mobile');

    $WIN.on('resize', function() {
        if (toggleButton.is(':visible')) nav.addClass('mobile');
        else nav.removeClass('mobile');
    });

    nav.find('a').on("click", function() {

        if (nav.hasClass('mobile')) {
            toggleButton.toggleClass('is-clicked');
            nav.slideToggle(); 
        }
    });

};

    /* Smooth Scrolling
    * ------------------------------------------------------ */
   var clSmoothScroll = function() {
        
    $('.smoothscroll').on('click', function (e) {
        var target = this.hash,
        $target    = $(target);
        
            e.preventDefault();
            e.stopPropagation();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {

            // check if menu is open
            if ($('body').hasClass('menu-is-open')) {
                $('.header-menu-toggle').trigger('click');
            }

            window.location.hash = target;
        });
    });

};

var clAOS = function() {
        
    AOS.init( {
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 300,
        once: true,
        disable: 'mobile'
    });

};

    /* Initialize
    * ------------------------------------------------------ */
   (function clInit() {

    
    clMoveHeader();
    clMobileMenu();
    clAOS();
    $WIN.on('resize', function() {
        clMoveHeader();
    });

})();
    
})(jQuery);