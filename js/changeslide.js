$(function(){


    let width = $('.carousel-list').outerWidth(true);
    let length = $('.carousel-list').length;
    let slideArea = width * length;
    $('.carousel-area').css('width',slideArea);

    let slideCurrent = 0;
    let lastCurrent = $('.carousel-list').length -1;

    //スライド切り替わり　左にずれる

    function changeslide(){
        $('.carousel-area').stop().animate({
            left: slideCurrent * -width
        })

        //pagination

        let pagination = slideCurrent + 1;
        $('.pagination-circle').removeClass('target');
        $(".pagination-circle:nth-of-type("+ pagination +")").addClass('target');
    };

    //ボタンクリック時にchangeslideを呼び出す

    $('.js-btn-next').click(function(){
        
        if(slideCurrent === lastCurrent){
            console.log('aaa');
            slideCurrent = 0;
            changeslide();
        }else{
            console.log('bbbb');
            slideCurrent++;
            changeslide();
        };
    });

    $('.js-btn-back').click(function(){
        
        if(slideCurrent === 0){
            slideCurrent  = lastCurrent;
            changeslide();
        }else{
            slideCurrent--;
            changeslide();
        }
    });
});