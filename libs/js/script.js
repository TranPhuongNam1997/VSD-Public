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

    // js nhat ky
    $('.bars-close').click(function () {
        $('.col-vsd-25').toggleClass('change-width');
        $('.col-vsd-75').toggleClass('change-width');
    });
    $('.bars-close').hover(function () {
        $('.heading-diary').toggleClass('change-color');
    });

    // js upload file
    // var fileInput  = document.querySelector( ".input-file" ),
    //     button     = document.querySelector( ".input-file-trigger" ),
    //     the_return = document.querySelector(".file-return");
    //
    // button.addEventListener( "keydown", function( event ) {
    //     if ( event.keyCode == 13 || event.keyCode == 32 ) {
    //         fileInput.focus();
    //     }
    // });
    // button.addEventListener( "click", function( event ) {
    //     fileInput.focus();
    //     return false;
    // });
    // fileInput.addEventListener( "change", function( event ) {
    //     the_return.innerHTML = this.value;
    // });

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