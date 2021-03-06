var swiper = new Swiper('.swiper-container.visual', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination.visual',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.visual',
    prevEl: '.swiper-button-prev.visual',
  },
});



var swiper = new Swiper('.swiper-container.display', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination.display',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.display',
    prevEl: '.swiper-button-prev.display',
  },
});
var iw = window.innerWidth;
if (iw < 1300) {
  new Swiper('.swiper-container.display', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination.display',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.display',
      prevEl: '.swiper-button-prev.display',
    },
  });
}
var iw = window.innerWidth;
if (iw < 1000) {
  new Swiper('.swiper-container.display', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination.display',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.display',
      prevEl: '.swiper-button-prev.display',
    },
  });
}

var iw = window.innerWidth;
if (iw < 641) {
  new Swiper('.swiper-container.display', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination.display',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.display',
      prevEl: '.swiper-button-prev.display',
    },
  });
}
var swiper = new Swiper('.swiper-container.edu', {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination.edu',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.edu',
    prevEl: '.swiper-button-prev.edu',
  },
});

var iw = window.innerWidth;
if (iw < 641) {
  new Swiper('.swiper-container.edu', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination.edu',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next.edu',
      prevEl: '.swiper-button-prev.edu',
    },
  });
}



var swiper = new Swiper('.swiper-container.notice', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination.notice',
    clickable: true,
  },
});

var swiper = new Swiper('.swiper-container.video', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination.video',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.video',
    prevEl: '.swiper-button-prev.video',
  },
});

// var iw = window.innerWidth;
// if (iw > 830) {
//   new Swiper('.swiper-container.video', {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: '.swiper-pagination.video',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next.video',
//       prevEl: '.swiper-button-prev.video',
//     },
//   });
// }

// var iw = window.innerWidth;
// if ( iw < 1300) {
//   new Swiper('.swiper-container.video', {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: '.swiper-pagination.video',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next.video',
//       prevEl: '.swiper-button-prev.video',
//     },
//   });
// }


  $(function () {
    var lastWidth = $(window).width();
    $(window).resize(function(){
        if($(window).width()!=lastWidth){
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    $(".sub_menu1").hide();
    $(".menu1").click(function () {
      $(".sub_menu1").slideToggle(300);
    });
  });



$(document).ready(function(){
  //???????????? ???????????? ????????????
  var lastWidth = $(window).width();
  $(window).resize(function(){
      if($(window).width()!=lastWidth){
          location.reload();
          lastWidth = $(window).width();
          return false;
      }
  });
 // ??????????????? open/close
 $(".mMenu").click(function(){
     $(".gnb").addClass("on");
     // nav??? on????????? ??????/??????
 });
 $(".mCloseBt").click(function(){
     $(".gnb").removeClass("on");
     // nav??? on????????? ??????/??????
 });

 // ???????????? ???????????? ??????
 $(".sub_menu2").hide();
 // .mSnb??? ????????? ??????
 $("ul.menu2 > .depth1 > a").click(function(){
     $(this).next().slideDown(300);
     //this ?????? ????????? ??????????????????
     $("ul.menu2 > .depth1 > a").not(this).next().slideUp(300);
     return false;
    });    
});