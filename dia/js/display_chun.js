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

    $(".fa-globe").click(function(){
      //$(".layer").css("display","block");
      $(".menubutton").show();
  });
  $(".fa-xmark").click(function(){
      //$(".layer").css("display","none");
      $(".menubutton").hide();
  });
  $(".fa-bars").click(function(){
    //$(".layer").css("display","block");
    $(".menubutton").show();
});
$(".fa-xmark").click(function(){
    //$(".layer").css("display","none");
    $(".menubutton").hide();
});
  });
  
  
  // 메뉴나브
  $(document).ready(function(){
       
    $(".header_menu > ul > li").mouseover(function(){
        $(this).find(".sub_menu").stop().slideDown(300);
    });
    $(".header_menu > ul > li").mouseout(function(){
        $(this).find(".sub_menu").stop().slideUp(300);
    });
  });
  var iw = window.innerWidth;
if ( iw < 768) {
  $(".menubox div li").mouseover(function(){
    $(this).find(".msub_menu").stop().slideDown(300);
});
$(".menubox div li").mouseout(function(){
    $(this).find(".msub_menu").stop().slideUp(300);
});
}
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });