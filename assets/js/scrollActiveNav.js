$(document).ready(function () {
    var nav = $('#narbar');


    $('#main').scroll(function () {
        // console.log($('#main').scrollTop());
        if ($('#main').scrollTop() > 400) {
            nav.addClass('show');
        }
        else {
            nav.removeClass('show');
        }
    });
    $('#main').scroll(function () {
        if ($('#main').scrollTop() > 505) {
            $('#narbar a[href="#about"]').addClass('active');
            $('#narbar a[href="#skills"]').removeClass('active');
            $('#narbar a[href="#portfolio"]').removeClass('active');
            $('#narbar a[href="#contact"]').removeClass('active');
        }
    });
    $('#main').scroll(function () {
        if ($('#main').scrollTop() > 1069) {
            $('#narbar a[href="#about"]').removeClass('active');
            $('#narbar a[href="#skills"]').addClass('active');
            $('#narbar a[href="#portfolio"]').removeClass('active');
            $('#narbar a[href="#contact"]').removeClass('active');
        }
    });
    $('#main').scroll(function () {
        if ($('#main').scrollTop() > 1910) {
            $('#narbar a[href="#about"]').removeClass('active');
            $('#narbar a[href="#skills"]').removeClass('active');
            $('#narbar a[href="#portfolio"]').addClass('active');
            $('#narbar a[href="#contact"]').removeClass('active');
        }
    });
    $('#main').scroll(function () {
        if ($('#main').scrollTop() > 2780) {
            $('#narbar a[href="#about"]').removeClass('active');
            $('#narbar a[href="#skills"]').removeClass('active');
            $('#narbar a[href="#portfolio"]').removeClass('active');
            $('#narbar a[href="#contact"]').addClass('active');
        }
    });



    $('a[href="#about"]').click(function () {
        $('#narbar a[href="#about"]').addClass('active');
        $('#narbar a[href="#skills"]').removeClass('active');
        $('#narbar a[href="#portfolio"]').removeClass('active');
        $('#narbar a[href="#contact"]').removeClass('active');
    });
    $('a[href="#skills"]').click(function () {
        $('#narbar a[href="#about"]').removeClass('active');
        $('#narbar a[href="#skills"]').addClass('active');
        $('#narbar a[href="#portfolio"]').removeClass('active');
        $('#narbar a[href="#contact"]').removeClass('active');
    });
    $('a[href="#portfolio"]').click(function () {
        $('#narbar a[href="#about"]').removeClass('active');
        $('#narbar a[href="#skills"]').removeClass('active');
        $('#narbar a[href="#portfolio"]').addClass('active');
        $('#narbar a[href="#contact"]').removeClass('active');
    });
    $('a[href="#contact"]').click(function () {
        $('#narbar a[href="#about"]').removeClass('active');
        $('#narbar a[href="#skills"]').removeClass('active');
        $('#narbar a[href="#portfolio"]').removeClass('active');
        $('#narbar a[href="#contact"]').addClass('active');
    });
    // $('.navigation a.active').removeClass('active');





});
