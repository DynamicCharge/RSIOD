$(document).ready( function() {
    $('.services__panel__item').on('click', function() {
        if(!$(this).find('.panel__item__icon').hasClass('open')){
            $(this).find('.panel__item__icon').addClass('open');
            $(this).find('.panel__item__list').addClass('expanded');
        } else{
            $(this).find('.panel__item__icon').removeClass('open');
            $(this).find('.panel__item__list').removeClass('expanded');
        }
    });
});