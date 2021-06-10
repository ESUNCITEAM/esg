//首頁輪播
$('.landingWrap').owlCarousel({
    animateOut: "animate__animated animate__fadeOut",
    animateIn: "animate__animated animate__fadeIn",
    smartSpeed: 600,
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    loop: true,
    nav: false,
    dots: true,
})

//ESG概念介紹
$('.introductionWrap').owlCarousel({
    margin: 20,
    nav: false,
    responsive: {
        0: {
            items: 1,
            dots: true,
        },
        768: {
            items: 2,
            dots: true,
        },
        960: {
            items: 3,
            dots: false,
        }
    }
})

//ESG主題方案
$('.planWrap').owlCarousel({
    items: 2,
    margin: 10,
    nav: true,
    navText: [
        '<svg width="40px" height="40px" viewBox="0 0 49.32 94.9"><polyline points="48.32 1 1 48.32 46.59 93.9" style="fill:none;stroke:#6d6d6d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>',
        '<svg width="40px" height="40px" viewBox="0 0 49.32 94.9"><polyline points="1 1 48.32 48.32 2.73 93.9" style="fill:none;stroke:#6d6d6d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>'],
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        }
    }
})

//LottieFiles功能
init();
function init() {
    var animData = {
        wrapper: document.getElementById('trees'),
        animType: 'svg',
        loop: true,
        prerender: true,
        autoplay: true,
        path: './json/tree.json'
    };
    var anim = bodymovin.loadAnimation(animData);
}

//手機狀態判斷NAV固定
if ($(window).width() < 500) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 480) {
            $('.mainNav').addClass('navFixed');
        } else {
            $('.mainNav').removeClass('navFixed');
        }
    });
}

//注意事項
$('.wraning .wrap p').click(function (event) {
    $('.wraning .wrap').toggleClass('wraning_active');
    $('.wraning .wrap ul').slideToggle();
});

//選單指定區塊滑動
$('.navBtn-01').click(function (event) {
    $('html,body').animate({
        scrollTop: $('.introduction').offset().top
    }, 500);
});
$('.navBtn-02').click(function (event) {
    $('html,body').animate({
        scrollTop: $('.trend').offset().top - 50
    }, 500);
});
$('.navBtn-03').click(function (event) {
    $('html,body').animate({
        scrollTop: $('.plan').offset().top
    }, 500);
});
$('.navBtn-04').click(function (event) {
    $('html,body').animate({
        scrollTop: $('.esunesg').offset().top - 50
    }, 500);
});
