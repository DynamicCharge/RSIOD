$(document).ready( function() {
    $('#one').parents('.container').find('.one').show()

    $('.stages__schema__item').hover(function(){
        let id = $(this).attr('id');
        $(this).parents('.container').find('.'+id).show();
    }, function() {
        let id = $(this).attr('id');
        $(this).parents('.container').find('.'+id).hide();
    });
});