(function ($) {

    $('article').hover(
        function () {
            $(this).stop().animate({
                width: '10%'
            }, 1000)
            var vid = $(this).find('video').get(0).play()
            vid.currentTime = 0;
            vid.play()
        },
        function () {
            $(this).stop().animate({
                width: '4%'
            }, 1000)
            $(this).find('video').get(0).pause()
        }
    )




})(jQuery)