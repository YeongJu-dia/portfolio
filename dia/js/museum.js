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
  });
  
  
  // 메뉴나브
  $(document).ready(function(){
       
    $(".header_menu > ul > li").mouseenter(function(){
        $(this).find(".sub_menu").stop().slideDown(300);
    });
    $(".header_menu > ul > li").mouseleave(function(){
        $(this).find(".sub_menu").stop().slideUp(300);
    });
  });
  


  AOS.init();
