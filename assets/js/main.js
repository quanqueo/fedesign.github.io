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

    $("#carousel").carousel({
        interval: 2500,

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