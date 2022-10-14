$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 120)
        {
            $("span#backtop").show(600);
    
            $("#header").css(
                {
                    "position" : "fixed",
                    "top" : "0px",
                    "z-index" : "999",
                    "width": "100%"
                }
            );
        }
    
        else{
            $("span#backtop").hide(600);
    
            $("#header").css(
                {
                    "position" : "unset",
                }
            );
        }
    
    
        $("span#backtop").click(function(){
            //$("html,body").stop().animate({ scrollTop: 0 }, 800);
            $("html,body").animate({ scrollTop: 0 }, 800);
        });
    });


    $(".carousel").carousel({
        interval: 2500,
    });

    $(".slick-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        infinite: false,
        vertical: true,
        draggable: true,
        speed: 300,
        autoplaySpeed: 2000,
    });

    $(".slick-slider").on("wheel", function (e)  {

        var item_length = $(".slick-slider .stick-carousel-item").length - 1;
        
        let scrollY = e.originalEvent.deltaY;
        if (scrollY < 0) {
            if (!($(this).slick("slickCurrentSlide") == 0)) {
                e.preventDefault();
                $(this).slick("slickPrev");
            }
        } else {
            if (!($(this).slick("slickCurrentSlide") == item_length)) {
                e.preventDefault();
                $(this).slick("slickNext");
            }
        }
    });


});