$(document).ready(function () {
    $('.jarallax').jarallax({
        speed: 0.5,
        imgWidth: 1366,
        imgHeight: 768
    })

    var btn = $('#toTop');

    $('#main').scroll(function () {
        if ($('#main').scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.click(function (e) {
        e.preventDefault();
        $("html,body,#main").css("scroll-behavior", "unset");
        $('html,body,#main').animate({ scrollTop: 0 }, { duration: 1100, easing: "swing" });
    });

    $('.nn1').click(function () {
        $("html,body,#main").css("scroll-behavior", "smooth");
    });
    $('.down').click(function (e) {
        e.preventDefault();
        $("html,body,#main").css("scroll-behavior", "unset");
        $('#main').animate({
            scrollTop: $('#about').offset().top
        }, { duration: 'slow', easing: "swing" });
    });
    $('#alt1').click(function (e) {
        e.preventDefault();
        $("html,body,#main").css("scroll-behavior", "unset");
        $('#main').animate({
            scrollTop: $('#about').offset().top
        }, { duration: 'slow', easing: "swing" });
    });
    $('#alt2').click(function (e) {
        e.preventDefault();
        $("html,body,#main").css("scroll-behavior", "unset");
        $('#main').animate({
            scrollTop: $('#skills').offset().top
        }, { duration: 1000, easing: "swing" });
    });
    $('#alt3').click(function (e) {
        e.preventDefault();
        $("html,body,#main").css("scroll-behavior", "unset");
        $('#main').animate({
            scrollTop: $('#portfolio').offset().top
        }, { duration: 1500, easing: "swing" });
    });
    $('#alt4').click(function (e) {
        e.preventDefault();
        $("html,body,#main").css("scroll-behavior", "unset");
        $('#main').animate({
            scrollTop: $('#contact').offset().top
        }, { duration: 2000, easing: "swing" });
    });
    // $('a.n1')
    //     .click(function (e) {
    //         e.preventDefault();
    //         $('#main').animate({
    //             scrollTop: $('#n1').offset().top
    //         }, { duration: 'slow', easing: "swing" });

    //     });
    $('#nav1')
        .click(function (e) {
            e.preventDefault();
            $('#narbar a[href="#about"]').addClass('active');
            $('#narbar a[href="#skills"]').removeClass('active');
            $('#narbar a[href="#portfolio"]').removeClass('active');
            $('#narbar a[href="#contact"]').removeClass('active');
            $("html,body,#main").css("scroll-behavior", "unset");
            $('#main').animate({
                scrollTop: $('#about').offset().top
            }, { duration: 'slow', easing: "swing" });

        });
    // $('a.n2')
    //     .click(function (e) {
    //         e.preventDefault();
    //         $('#main').animate({
    //             scrollTop: $('#n2').offset().top
    //         }, { duration: 1000, easing: "swing" });

    //     });

    $('#nav2')
        .click(function (e) {
            e.preventDefault();
            $('#narbar a[href="#about"]').removeClass('active');
            $('#narbar a[href="#skills"]').addClass('active');
            $('#narbar a[href="#portfolio"]').removeClass('active');
            $('#narbar a[href="#contact"]').removeClass('active');
            $("html,body,#main").css("scroll-behavior", "unset");
            $('#main').animate({
                scrollTop: $('#skills').offset().top
            }, { duration: 1000, easing: "swing" });

        });
    // $('a.n3')
    //     .click(function (e) {
    //         e.preventDefault();
    //         $('#main').animate({
    //             scrollTop: $('#n13').offset().top
    //         }, { duration: 1000, easing: "swing" });

    //     });

    $('#nav3')
        .click(function (e) {
            e.preventDefault();
            $('#narbar a[href="#about"]').removeClass('active');
            $('#narbar a[href="#skills"]').removeClass('active');
            $('#narbar a[href="#portfolio"]').addClass('active');
            $('#narbar a[href="#contact"]').removeClass('active');
            $("html,body,#main").css("scroll-behavior", "unset");
            $('#main').animate({
                scrollTop: $('#portfolio').offset().top
            }, { duration: 1500, easing: "swing" });

        });
    // $('a.n4')
    //     .click(function (e) {
    //         e.preventDefault();
    //         $('#main').animate({
    //             scrollTop: $('#n4').offset().top
    //         }, { duration: 1500, easing: "swing" });

    //     });

    $('#nav4')
        .click(function (e) {
            e.preventDefault();
            $('#narbar a[href="#about"]').removeClass('active');
            $('#narbar a[href="#skills"]').removeClass('active');
            $('#narbar a[href="#portfolio"]').removeClass('active');
            $('#narbar a[href="#contact"]').addClass('active');
            $("html,body,#main").css("scroll-behavior", "unset");
            $('#main').animate({
                scrollTop: $('#contact').offset().top
            }, { duration: 2000, easing: "swing" });

        });
    // $('a.n5')
    //     .click(function (e) {
    //         e.preventDefault();
    //         $('#main').animate({
    //             scrollTop: $('.n15').offset().top
    //         },'slow');

    //     });


    // flip
    var h1 = $('.front').height();
    console.log(h1);
    $('.back').height(h1);
    document.getElementsByTagName("BODY")[0].onresize = function () { myFunction() };
    function myFunction() {
        var h2 = $('.front').height();
        console.log(h2);
        $('.back').height(h2);
    }
    // !flip
});
