$(document).ready( function() {
    $('.panel__item__label').on('click', function() {
        if(!$(this).children('.panel__item__icon').hasClass('open')){
            $(this).children('.panel__item__icon').addClass('open');
            $(this).parents('.services__panel__item').find('.panel__item__list').addClass('expanded');
        } else{
            $(this).children('.panel__item__icon').removeClass('open');
            $(this).parents('.services__panel__item').find('.panel__item__list').removeClass('expanded');
        }
    })
});