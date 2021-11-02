$(document).ready(function (){
    $('.next').click(function(){
        var currentSlide = $('.slider__item.current');
        var currentSlideIndex = $('.slider__item.current').index();
        var nextSlideIndex = currentSlideIndex + 1;
        var nextSlide = $('.slider__item').eq(nextSlideIndex);
        currentSlide.fadeOut(1);
        currentSlide.removeClass('current');

        if(nextSlideIndex == ($('.slider__item:last').index()+1)){
            $('.slider__item').eq(0).fadeIn(500);
            $('.slider__item').eq(0).addClass('current');
        } else {
            nextSlide.fadeIn(500);
            nextSlide.addClass('current');
        }
    });
});