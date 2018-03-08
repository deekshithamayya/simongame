$("#simon").hide();
$("#normal").show();
$("#strict").show();
$("#reset").hide();
var check;
var color=['green','red','blue','yellow'];
var tillnow=[];
var count;
var mode;
var i;
function start(par){
  mode=par;
  $("#simon").show();
$("#normal").hide();
$("#strict").hide();
$("#reset").show();
   $(".colorchange").css("background-color","#000");
  $("caption").html("COUNT: "+(tillnow.length+1));
  pcmove();
  }

function pcmove(){
  ct=0;
    var status=setInterval(function(){
      if(ct==tillnow.length){
       clearInterval(status);
      chooserandom();
      }
      else{
      display(tillnow[ct]);
        ct++;}},800);
  
}
  function chooserandom(){
    check=0;
 var chosen=color[Math.floor(Math.random()*color.length)];
 tillnow.push(chosen);
 setTimeout(function(){display(chosen);
                      setup();},50);
  count=tillnow.length;
    i=count;
}
function setup(){
   $("#simon").css("pointer-events","auto");
  $(".jumbotron").html("YOUR TURN");
}
function me(par){
  
  if(i>0){
    if(par==tillnow[count-i]){
       display(par);
       i--;
    }
     else{
       if(mode=='strict'){
         $("#msg").show();
         $("#msg").html("AWWW! YOU ARE WRONG!  LETS BEGIN AGAIN!");
         $("#simon").css("opacity","0.5");
         $("#reset").hide();
         $(".jumbotron").html("SIMON GAME");
          setTimeout(function(){reset('in');},3000);
       }
       if(mode=='normal'){
         $("#msg").show();
         $("#msg").html("OOPS!  OBSERVE CLOSELY AGAIN");
         $("#simon").css("opacity","0.5");
         $("#reset").hide();
         $("#simon").css("pointer-events","none");
         $(".jumbotron").html("Simon Game");
         setTimeout(function(){replay();},3000);
       }
   function replay(){
           $(".jumbotron").html("COMPUTER'S TURN");
        $("#simon").css("opacity","1");
         $("#reset").show();
         $("#msg").hide();
          ct=0;
          var status=setInterval(function(){
          if(ct==tillnow.length){
          clearInterval(status);
            count=tillnow.length;
            i=count;
            $(".jumbotron").html("YOUR TURN")
             $("#simon").css("pointer-events","auto");
           }
          else{
          display(tillnow[ct]);
            ct++;}},800);
          }
      }
  }

 if ((i==0)&&(count<20)){
  $(".jumbotron").html("COMPUTER'S TURN");
  $("#simon").css("pointer-events","none");
    setTimeout(function(){pcmove();
                         $("caption").html("COUNT: "+(tillnow.length+1));},1300);
  }
  if((i==0)&&(count==20)){
    win();
   }
}
function win(){
  
  $(".jumbotron").html("SIMON GAME");
  $("#simon").hide();
  $("#msg").show();
  $("#msg").html("YAYYY! YOU WON!! YOU ARE THE BEST!!!!");
  setTimeout(function(){reset('out');},3000);
  
}
function display(par){
  check=1;
   $("#"+par).css("opacity","0.5");
   setTimeout(function(){$("#"+par).css("opacity","1");},500);
   var x=document.getElementById(par+"audio");
   x.play();
  
  }
function reset(par){

  tillnow=[];
  if(par=='in'){
    $("caption").html("COUNT: "+(tillnow.length+1));
    $("#simon").css("opacity","1");
         $("#reset").show();
    $("#msg").hide();
     $(".jumbotron").html("COMPUTER'S TURN");
  $("#simon").css("pointer-events","none");
    pcmove();
  }
  if(par=='out'){
    $("#msg").hide();
    $(".colorchange").css("background-color","#062f4f");
  $(".jumbotron").html("SIMON GAME");
    $("#simon").hide();
$("#normal").show();
$("#strict").show();
$("#reset").hide();
    
  }
 }