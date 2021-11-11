$(document).ready(function() {
    $('.to-top').click(function(e) {
        e.preventDefault();
        var anchor = $('#top');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });

    $('#open-menu').click(function() {
        if(!$('.expanded-menu').hasClass('menu__active')){
            $('.expanded-menu').addClass('menu__active')

            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }else{
            $('.expanded-menu').removeClass('menu__active');
            
        }
    });

    $('#close-menu').click(function() {
        if($('.expanded-menu').hasClass('menu__active')){
            $('.expanded-menu').removeClass('menu__active');
            document.body.style.position = '';
            document.body.style.top = '';
        }
    });
});