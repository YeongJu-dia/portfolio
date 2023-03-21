$(document).ready(function(){
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });  
  });

$(document).ready(function(){
    // 언어나브
    $(".lan").mouseover(function(){
        $(this).find(".lansub").stop().slideDown(300);
    });
    $(".lan").mouseout(function(){
        $(this).find(".lansub").stop().slideUp(300);
    });

// 메뉴나브
$(".nav > ul > li").mouseover(function(){
    $(this).find(".sub_menu").stop().slideDown(300);
});
$(".nav > ul > li").mouseout(function(){
    $(this).find(".sub_menu").stop().slideUp(300);
});

// 스와이퍼
// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// 전시
// var swiper = new Swiper(".poSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


});

