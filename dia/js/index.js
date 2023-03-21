// new fullpage('#fullpage', {
//     sectionsColor: ['#3b8d99', '#fff', '#fff', '#3b8d99'],
//   });

//   var square = document.getElementsByClassName('square');

//   for(var i = 0; i<square.length; i++){
//     square[i].addEventListener('mouseenter', function(){
//       this.classList.add("rubberBand");
//       this.addEventListener("animationend", function(){
//         this.classList.remove("rubberBand");
//       }, false);
//     })
//   }

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true, 
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var iw = window.innerWidth;
  if ( iw > 929) {
    new fullpage('#fullpage', {
      sectionsColor: ['#3b8d99', '#fff', '#fff', '#3b8d99'],
    });
  
    var square = document.getElementsByClassName('square');
  
    for(var i = 0; i<square.length; i++){
      square[i].addEventListener('mouseenter', function(){
        this.classList.add("rubberBand");
        this.addEventListener("animationend", function(){
          this.classList.remove("rubberBand");
        }, false);
      })
    }
  }