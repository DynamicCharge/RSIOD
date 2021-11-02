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

    $('.prev').click(function(){
        var currentSlide = $('.slider__item.current');
        var currentSlideIndex = $('.slider__item.current').index();
        var prevSlideIndex = currentSlideIndex - 1;
        var prevSlide = $('.slider__item').eq(prevSlideIndex);

        currentSlide.fadeOut(1);
        currentSlide.removeClass('current');
        prevSlide.fadeIn(500);
        prevSlide.addClass('current');
    });

    if($('.about__wrapper__mobile').is(':visible')){
        setInterval(temp, 5000);
    }

    function temp () {
        var currentSlide = $('.wrapper__item__mobile.current');
        var currentSlideIndex = $('.wrapper__item__mobile.current').index();
        var nextSlideIndex = currentSlideIndex + 1;
        var nextSlide = $('.wrapper__item__mobile').eq(nextSlideIndex);

        var currentControl = $('.controll.controll__active');
        var currentControlIndex = $('.controll.controll__active').index();
        var nextControllIndex = currentControlIndex + 1;
        var nextControll = $('.controll').eq(nextControllIndex);


        currentSlide.fadeOut(1);
        currentSlide.removeClass('current');

        if(nextSlideIndex == ($('.wrapper__item__mobile:last').index()+1)){
            $('.wrapper__item__mobile').eq(0).fadeIn(500);
            $('.wrapper__item__mobile').eq(0).addClass('current');
        } else {
            nextSlide.fadeIn(500);
            nextSlide.addClass('current');
        }

        currentControl.removeClass('controll__active');

        if(nextSlideIndex == ($('.controll:last').index()+1)){
            $('.controll').eq(0).fadeIn(500);
            $('.controll').eq(0).addClass('controll__active');
        } else {
            nextControll.addClass('controll__active');
        }
    }
});