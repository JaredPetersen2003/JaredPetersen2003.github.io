$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })
});

window.addEventListener('scroll', function(){
  var scroll_y = this.scrollY + (screen.height / 1.8);
  var alertOn = document.getElementById('counter-stats').offsetTop;
  console.log(scroll_y);
  if(scroll_y > alertOn){
    countUp();
    this.removeEventListener('scroll', arguments.callee, false);
  }
});

function countUp(){
$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});
};
