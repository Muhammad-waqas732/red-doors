$(function () {
    var theColMegaMenu = $('#footer .accordion-block').parent('.sqs-col-6');
    $(theColMegaMenu).parent('.row').addClass('mega-menu');
    $('.mega-menu').attr('id', 'shop1');
    $('.mega-menu').css('display', 'none');
    var opener = $(`.main-nav a[href^="#shop1"]`);
    $.fn.openFunc = function () {

    };
    $(opener).mouseover(function (e) {
        var offset = $(this).offset();
        var x = offset.left;
        var y = offset.top;
        //alert("X: " + x + " Y: " + y);
        $('.mega-menu').css('display', 'unset');
        $('.mega-menu').css('left', -20 + x);
        $('.mega-menu').css('top', 20 + y);
    });
    $(opener).click(function (e) {
        var offset = $(this).offset();
        var x = offset.left;
        var y = offset.top;
        //alert("X: " + x + " Y: " + y);
        if (!$('.mega-menu').hasClass('active')) {
            $('.mega-menu').css('display', 'unset');
            $('.mega-menu').css('left', -20 + x);
            $('.mega-menu').css('top', 20 + y);
        }
        if ($('.mega-menu').hasClass('active')) {
            $('.mega-menu').css('display', 'none');
        }

    });
    $('.mega-menu').mouseover(function (e) {
        $(this).css('display', 'unset');
    });
    $(opener).mouseleave(function () {
        $('.mega-menu').removeClass('active');
        $('.mega-menu').css('display', 'none');
    });
    $('.mega-menu').mouseleave(function () {
        $('.mega-menu').removeClass('active');
        $('.mega-menu').css('display', 'none');
    });
    //()
    //$( "body" ).tabs({
    //event: "mouseover"
    //});
    //$( ".mega-menu" ).dialog();
});