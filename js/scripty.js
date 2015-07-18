$(document).ready(function() {
    $('#sidebar img').hide();
    $('#me').hide();
    $('li').hover(function() {
        $(this).find('img').fadeIn('fast');
    },
        function() {
        $(this).find('img').fadeOut('fast');
    });
    $('nav > a').hover(function() {
        $(this).next().fadeIn();
    },
        function() {
        $(this).next().fadeOut();
    });
});