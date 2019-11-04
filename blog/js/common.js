
function custom() {
    $_scale = 4 / 1;
    $_bannerWidth = $('.sub-header .banner').width();
    $('.sub-header .banner').height($_bannerWidth / $_scale);
}
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('#backtop').show();
        } else {
            $('#backtop').hide();
        }
    });
    $('#backtop a').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 200);
    });
    $('.header .nav .menu ul > li').hover(function () {
        $(this).children('ul').show();
    }, function () {
        $(this).children('ul').hide();
    });
    $('.sub-header .sub-nav .menu ul > li').hover(function () {
        $(this).children('a').addClass('current');
        $(this).children('ul').show();
    }, function () {
        $(this).find('ul').hide().end().find('a').removeClass('current');
    });
    $('.header .nav .menu').clone(false).appendTo('#nav .inner');
    $('.header .nav-btn').click(function () {
        $('#nav').slideToggle(20);
    });
    custom();
    $(window).resize(function () {
        $_body = $('body').width();
        if ($_body > 768) {
            $('#nav').hide();
        }
        custom();
    });
    $('#comment li').hover(function () {
        $(this).addClass('mouseover');
    }, function () {
        $(this).removeClass('mouseover');
    });
    $('.footer .pageslist ul li.qrcode').hover(function () {
        $(this).find('.qrcode-img').show();
    }, function () {
        $(this).find('.qrcode-img').hide();
    });
    $('.footer .pageslist ul li.qrcode a').click(function () {
        $(this).siblings('.qrcode-img').fadeToggle(100);
    });
    $('#logsearch .btn-round').click(function () {
        var $_s = $('#logsearch .input-search').val();
        if ($_s == '') {
            alert('请输入搜索词再搜索！');
            return false;
        }
    });
});