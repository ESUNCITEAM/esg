$(document).ready(function () {
    //解決點擊延遲
    FastClick.attach(document.body);

    //gotop        
    var gotop = $('#gotop');
    gotop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            gotop.fadeIn();
        } else {
            gotop.stop().fadeOut();
        }
    });
})