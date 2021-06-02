$(document).ready(function () {
    //리사이징 할때마다 새로고침
    var lastWidth = $(window).width();
    $(window).resize(function () {
        if ($(window).width() != lastWidth) {
            location.reload();
            lastWidth = $(window).width();
            return false;
        }
    });
    $("span.openm").click(function () {
        $(".menu").addClass("on");
    });
    $(".bt").click(function () {
        $(".menu").removeClass("on");
    });
});

$(document).ready(function(){
  // 탭메뉴 가로형
  $(".tab ul li").click(function(){
      $(this).addClass('on')
              .siblings().removeClass('on');
      $("#"+$(this).data('id')).addClass('on')
              .siblings().removeClass('on');
  });
});


var swiper = new Swiper(".mySwiper.banner", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination.banner",
      clickable: true,
    }
  });

  var swiper = new Swiper(".mySwiper.alb", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  });


  var swiper = new Swiper(".mySwiper.concert", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination.concert",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next.concert",
      prevEl: ".swiper-button-prev.concert",
    },
  });




//달력
  /*document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth'
    });
    calendar.render();
  });*/

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
    
      
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth'
      },
      //initialDate: '2021-05-12',
      editable: false,
      navLinks: true, // can click day/week names to navigate views
      dayMaxEvents: true, // allow "more" link when too many events
      
      events: [
          {
          title: '더 포레스텔라 2021 – 수원',
          start: '2021-06-12',
          end: '2021-06-13'
        },
        {
          title: '(포르테디콰트로) 2021 혼라이프뮤직크로스오버',
          start: '2021-06-13',
          start: '2021-06-18'
        },
        {
          title: '(손혜수) 베토벤x클림트 운명의 키스',
          start: '2021-06-18'
        },
        {
          title: '더 포레스텔라 2021',
          start: '2021-06-26',
          end: '2021-06-27'
        }
      ]
    });

    
    calendar.render();
  });


  AOS.init({
            disable: function () {
                var maxWidth = 1081;
                return window.innerWidth < maxWidth;
            }
        });

