$('#hide-btn').click(function(){
  $('#show').hide("fast");
});
$('#show-btn').click(function(){
  $('#show').show("slow");
});
$('#toggle-show-btn').click(function(){
  $('#show2').toggle(500);
});
$('#toggle-show-btn2').click(function(){
  $('#show3:not(:animated)').toggle(500);
});

$('#slideup-btn').click(function(){
  $('#slide').slideUp("fast");
});
$('#slidedown-btn').click(function(){
  $('#slide').slideDown("slow");
});
$('#slidetoggle-btn').click(function(){
  $('#slideToggle:not(:animated)').slideToggle("slow");
});

$('#fadein-btn').click(function(){
  $('#fade').fadeIn("slow");
});
$('#fadeout-btn').click(function(){
  $('#fade').fadeOut("fast");
});
$('#fadeto-btn').click(function(){
  $('#fadeto').fadeTo("slow",0.5);
});
$('#fadetoggle-btn').click(function(){
  $('#fadetoggle:not(:animated)').fadeToggle("slow");
});

$('#animation-btn').click(function(){
  $("#anim").animate({
    "margin-left": "500px"
  })
});

$('#animation-btn2').click(function(){
  $("#anim2").animate({
    "margin-left": "500px"
    },1000)
  });

$('#animation-btn3').click(function(){
  $("#anim3").animate({
    "margin-left": "500px"
    },1000,'swing')
  });

$('#animation-btn4').click(function(){
  $("#anim4").animate({
    "margin-left": "500px",
    "width": "50px",
    "height": "50px"
    },1000,'swing',function(){
      $(this).css("background-color","red").animate({
          "width":"200px",
          "height":"200px"
        },1000,function(){
          $(this).fadeOut('slow');
        });
    });
  });
