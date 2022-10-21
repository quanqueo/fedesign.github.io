$(document).ready(function(){
    

    $(window).scroll(function(){
        if($(this).scrollTop() >= 20){
            $("#backtop").show(500);
            $("#header").css({
                "background-color": "white"
            });
            
        }
        else{
            $("#backtop").hide(500);
            $("#header").css({
                "background-color": "transparent"
            });
        }
        
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

    $("#backtop").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
    $("li.menu-item").click(function(){
        var subMenu = $(this).children("ul.sub-menu");
        $("#header").css({
            "background-color": "white",
        });
        
        if(subMenu.hasClass("show"))
        {
            subMenu.removeClass("show");
            $(this).children("span").children("i").removeClass("active");
        }
        else{
            $("li.menu-item").children("ul.sub-menu").removeClass("show");
            $("li.menu-item").children("span").children("i").removeClass("active"); 
            subMenu.addClass("show");
            $(this).children("span").children("i").addClass("active"); 
        } 
        
    });

    $("#content").click(function(){
        $("li.menu-item").children("ul.sub-menu").removeClass("show");
        $("li.menu-item").children("span").children("i").removeClass("active");
    })

    $("li.menu-item:first-child").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        $("#header").css({
            "background-color": "transparent"
        });
    });
    
});