$(function (){

    function startCarousel(){

        $('.news-slider').owlCarousel({
            loop:true,
            margin:10,
            items:4,
            responsiveClass:true,

            dots:false,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        });
        $('.speaker-list').owlCarousel({
            loop:true,
            margin:22   ,
            items:4,
            responsiveClass:true,

            dots:false,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                    nav:false
                },
                1024:{
                    items:4,
                    nav:true,
                    margin:18,
                    loop:false
                },
                1100:{
                    items:5,
                    nav:true,
                    margin:18,
                    loop:false
                },
                1450:{
                    items:6,
                    nav:true,
                    loop:false
                }
            }
        });
        $('.specprojects-slider').owlCarousel({
            loop:true,
            items: 1,
            dots:true,
        });


    }
    $('.vebinar-speakers').owlCarousel({
        loop:true,
        items: 1,
        dots:true,
        nav:true,
    });
    function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');
    }

    if ( $(window).width() < 601 ) {
        stopCarousel();
        $('.vebinar-speakers').owlCarousel({
            loop:true,
            items: 1,
            dots:true,
            nav:true,
        });
    } else {
        startCarousel();
    }

    $(window).resize(function() {
        if ( $(window).width() < 601 ) {
            stopCarousel();
            $('.vebinar-speakers').owlCarousel({
                loop:true,
                items: 1,
                dots:true,
                nav:true,
            });
        } else {
            startCarousel();
        }
    });
    let options = $.extend({}, $.datepicker.regional['ru'], {dateFormat: "mm/dd/yy"});

    $( "#datepicker" ).datepicker(options);

    $('.menu-btn').on('click',function (){
       $('.mobile-header').addClass('opened')
       $('.mobile-menu-list').addClass('opened')
       $('.mobile-search').addClass('opened')

   })
    $('.menu-close').on('click',function (){
        $('.mobile-header').removeClass('opened')
        $('.mobile-menu-list').removeClass('opened')
        $('.mobile-search').removeClass('opened')

    })
    $('.category-select').on('click', function (){
        $(this).parent('.category').toggleClass('opened')
    })
    $('.select-item .closed').on('click', function (){
        $(this).siblings('.category-sub-select').toggleClass('opened')
        $(this).toggleClass('opened');
    })

})