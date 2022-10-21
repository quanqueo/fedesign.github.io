$(".slick-slider").slick({
    slidesToShow: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    infinite: false,
    vertical: true,
    draggable: true,
    speed: 300,
    autoplaySpeed: 1500,
});

$(".slick-slider").on("wheel", function (e) {

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