window.addEventListener('scroll', function(){
  var scroll_y = this.scrollY + (screen.height / 1.8);
  var alertOn = document.getElementById('counter-stats').offsetTop;
  console.log(scroll_y);
  if(scroll_y > alertOn){
    console.log("ds");
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