$( document ).ready(function() {


    var getchieucao = $("footer").height();
    $(".push").css({"height": getchieucao + 38});
    $(".wrapper").css({"margin-bottom": -(getchieucao + 38)});

    // js navigation
    $(".menucate-lv2").hide();
    $(".rotate-down .menucate-lv2").show();
    $(".menucate-lv1 > li > a").click(function(){
        $(".menucate-lv1 > li.hasdrop-cate").removeClass('rotate-down');

        $(".menucate-lv2").slideUp();
        if(!$(this).next(".menucate-lv2").is(":visible"))
        {
            $(this).next(".menucate-lv2").slideDown();
            $(this).parent().addClass('rotate-down');
        }
    });

    // js menubar

    $(".btn-bars-head button").click(function () {
        overlay.toggle();
        $('.navigation').toggleClass('open');
    });

    var overlay = $("<div class='overlay'></div>");
    $("body").prepend(overlay);
    overlay.click(function () {
        $(".btn-bars-head button").trigger('click');
    });



});
$(function() {
    $(".slider-news").owlCarousel({
        items: 1,
        responsive: {
            1200: { item: 3, },// breakpoint from 1200 up
            982: { items: 3, },
            768: { items: 2, },
            480: { items: 1, },
            0: { items: 1, }
        },
        rewind: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 500, //slide speed smooth

        dots: true,
        dotsEach: false,
        loop: true,
        nav: true,
        navText: ['', ''],
        // navSpeed: 250, //slide speed when click button

        autoWidth: false,
        margin: 11,

        lazyContent: false,
        lazyLoad: false,

        animateIn: false,
        animateOut: false,

        center: false,
        URLhashListener: false,

        video: false,
        videoHeight: false,
        videoWidth: false,
    });
});