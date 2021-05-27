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
          title: '(황수미) KBS교향악단 제765회 정기연주회',
          start: '2021-05-01'
        },
        {
          title: '(포르테 디 콰트로)2021 광주시 문화재단 출범 기념 페스티벌 – 포르테 디 콰트로 콘서트 with 박기영',
          start: '2021-05-07'
        },
        
        {
          title: '(박종호) 서울스프링실내악축제',
          start: '2021-05-13'
        },
        {
          title: '포레스텔라 GOD의 점심어택',
          start: '2021-05-13T12:30:00'
        },
        {
          title: '(포르테 디 콰트로)언플러그드 콘서트: 더 클래식 – 진주',
          start: '2021-05-21'
        },
        {
          title: '(손혜수) 베이스 손혜수 리사이틀 <그리움을 아는 이>',
          start: '2021-05-25'
        },
        {
          title: '(박종호) 이천문화재단 기획공연 – 문화가 있는 날',
          start: '2021-05-28'
        },
        {
          title: '(포르테 디 콰트로) 언플러그드 콘서트 앙코르',
          start: '2021-05-30'
        },
        {
          title: '더 포레스텔라 2021 – 수원',
          start: '2021-06-12',
          end: '2021-06-13'
        },
        {
          title: '(미라클라스) 콘서트: 프렌드 오브 유',
          start: '2021-06-13'
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

