$(function(){


    $('.slider').slick({
        autoplay: true,         
        autoplaySpeed: 2000,
        speed: 800,      
        dots: true,
        arrows: true,        
        infinite: true,
        pauseOnHover: false,  
        centerMode: true,
        centerPadding: '25%',
    });
    
    $(window).scroll(function(){
      


        let scroll = $(window).scrollTop();
        let height = $(window).height();

       

        $('.fadein').each(function(){

            let element =$(this).offset().top;


            if(scroll > element - height + 100){
                $(function(){
                    $('.fadein').each(function(i){
                        $(this).delay(i * 200).queue(function(){
                            $(this).addClass('active');
                        });
                    });
                });
            }
        });
    });
});