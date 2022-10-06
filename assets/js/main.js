$(".carousel").carousel({
    interval: 2500,
});

$(".slick-slider").slick({
    slidesToShow: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    draggable: true,
    speed: 600,
    autoplaySpeed: 2500,
});
$(".slick-slider").on("wheel", function (e) {
    e.preventDefault();
    let scrollY = e.originalEvent.deltaY;
    if (scrollY < 0) {
        $(this).slick("slickNext");
    } else {
        $(this).slick("slickPrev");
    }
});
