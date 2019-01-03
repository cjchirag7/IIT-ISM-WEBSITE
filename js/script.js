$(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
       $(window).scroll(function(){
   if($(this).scrollTop() < 600) { 
              $('.navbar').addClass('trans');
          } else {
              $('.navbar').removeClass('trans');
          }

});
       });

        $("#chairman").click(function(){
          $('#chairModal').modal('toggle');
        }) ;       

        $("#dir").click(function(){
          $('#dirModal').modal('toggle');
        }) ;       

        $("#dep_dir").click(function(){
          $('#dep_dirModal').modal('toggle');
        }) ;       
  var c = document.getElementById("canvas_title");
var ctx = c.getContext("2d");

//var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
//gradient.addColorStop("0", "#FFFF33");
//gradient.addColorStop("0.5", "gold");
//gradient.addColorStop("1.0", "gold");
// Fill with gradient
//ctx.fillStyle =gradient;
ctx.fillStyle ="white";
ctx.font="bold 50pt Helvetica";
ctx.fillText("IIT (ISM)", 0, 80);
//ctx.fillText("Dhanbad", 0, 165);   

