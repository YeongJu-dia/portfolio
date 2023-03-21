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
  // $(document).ready(function(){
       
  //   $(".menubox div li").mouseenter(function(){
  //       $(this).find(".msub_menu").stop().slideDown(300);
  //   });
  //   $(".menubox div li").mouseleave(function(){
  //       $(this).find(".msub_menu").stop().slideUp(300);
  //   });
  // });
  
  AOS.init({

    disable: function () {
      var desktop = 765;
      return window.innerWidth < desktop;
    } 
  
  });

//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

var iw = window.innerWidth;
if ( iw < 1301) {
  new Swiper('.mySwiper.museumtm', {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
if ( iw < 1101) {
  new Swiper('.mySwiper.museumtm', {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
  var iw = window.innerWidth;
if ( iw < 923) {
  new Swiper('.mySwiper.museumtm', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
var iw = window.innerWidth;
if ( iw < 765) {
  new Swiper('.mySwiper.museumtm', {
    slidesPerView: 3,
    spaceBetween: 5,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

var iw = window.innerWidth;
if ( iw < 520) {
  new Swiper('.mySwiper.museumtm', {
    slidesPerView: 2,
    spaceBetween: 5,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}





// var iw = window.innerWidth;
// if ( iw < 768) {
//   new Swiper('.mySwiper.sec02m', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
    
//     },
//   });
// }


// var iw = window.innerWidth;
// if ( iw < 768) {
//   new Swiper('.mySwiper.sec03m', {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
    
//     },
//   });
// }





var iw = window.innerWidth;
if ( iw < 765) {
  new Swiper('.mySwiper.sec03m', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
var iw = window.innerWidth;
if ( iw < 765) {
  new Swiper('.mySwiper.sec02m', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}


var iw = window.innerWidth;
if ( iw < 520) {
  new Swiper('.mySwiper.sec03m', {
  });
}
var iw = window.innerWidth;
if ( iw < 520) {
  new Swiper('.mySwiper.sec02m', {
  });
}