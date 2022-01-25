$(function(){
    let goTop = $('.go-top'),
        home = $('.home'),
        homeHeight = home.innerHeight(),
        scrollPos;

        $(window).on('scroll', function(){
            scrollPos = $(this).scrollTop();

            if (scrollPos > homeHeight){
                goTop.addClass('go-top--active');
            } else {
                goTop.removeClass('go-top--active');
            }
        });

    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        
      
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      });


    let menuBtn = $('.menu-btn'),
        nav = $('.nav'),
        main = $('.main'),
        footer = $('.footer');

    menuBtn.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('menu-btn--active');
        nav.toggleClass('nav--active');
        main.toggleClass('main--active');
    });



    let slider = $(".works__items");
    slider.slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $(document).ready(function($) {
        $.iMissYou({
            title: 'Эй, вернись!',
            favicon: {
                enabled: true,
                src: '../img/favicon/sad.svg'
            }
        });
    });
});
