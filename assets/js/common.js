$(document).ready(function() {
    var bnrSwiper = new Swiper('.main_visual_bnr .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.main_visual_bnr .swiper-pagination',
          type: 'fraction',
          clickable: true,
        },
    });
    var productSwiper = new Swiper('.main_bestsellor .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
    });
});