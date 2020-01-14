$( document ).ready(function() {


    var getchieucao = $("footer").height();
    $(".push").css({"height": getchieucao + 38});
    $(".wrapper").css({"margin-bottom": -(getchieucao + 38)});

    // js navigation
    $(".menucate-lv2").hide();
    $(".rotate-down .menucate-lv2").show();
    $(".menucate-lv1 > li > a").click(function(){
        $(".menucate-lv1 > li.hasdrop-cate").removeClass('rotate-down');

        $(".menucate-lv2").slideUp(300);
        if(!$(this).next(".menucate-lv2").is(":visible"))
        {
            $(this).next(".menucate-lv2").slideDown(300);
            $(this).parent().addClass('rotate-down');
        }
    });

    $(".block-list-guild").hide();
    $(".list-parent-guide>li:first-child .block-list-guild").show();
    $(".list-parent-guide>li>a").click(function(){
        $('.list-parent-guide>li>a').removeClass('active');
        $(".block-list-guild").slideUp();
        if(!$(this).next(".block-list-guild").is(":visible"))
        {
            $(this).next(".block-list-guild").slideDown();
            $(this).addClass('active');
        }
    });

    //js select
    $('select').click(function () {
        $(this).toggleClass('select-icon-up');
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

    // js nut them moi

    $('.box-select-pro').click(function () {
        $('.box-select-pro').removeClass('active');
        $(this).addClass('active');
    })

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

    // js datetimepicker

    jQuery('.datepicker-vsd').datetimepicker({
        timepicker:false,
        format: 'd/m/Y'
    });


    // checkvalidate

    // $(".form-check-validate").validate(
    //     {
    //         rules:
    //             {
    //                 tentcph:
    //                     {
    //                         required: true
    //                     },
    //                 tentienganh:
    //                     {
    //                         required: true
    //                     },
    //                 noicap:
    //                     {
    //                         required: true
    //                     }
    //             },
    //         messages:
    //             {
    //                 tentcph:
    //                     {
    //                         required: "Vui lòng nhập Tên TCPH"
    //                     },
    //                 tentienganh:
    //                     {
    //                         required: "Vui lòng nhập Tên tiếng anh"
    //                     },
    //                 noicap:
    //                     {
    //                         required: "Vui lsfsdafsd"
    //                     }
    //
    //         }
    // });
});