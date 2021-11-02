$(document).ready(function() {
    $('.to-top').click(function(e) {
        e.preventDefault();
        var anchor = $('#top');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });
});