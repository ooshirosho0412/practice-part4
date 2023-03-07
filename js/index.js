$(function(){
    $(".animationLogo").css("display","none");
    setTimeout(function(){
        $('.anime').fadeOut();
    },6500,);
    setTimeout(function(){
		$('.video-logo').fadeIn(2000);
	},4320); 
	setTimeout(function(){
		$('.video-logo').fadeOut(500);
	},4320); 
})
$(function(){
    $(".animationLogo").css({opacity:"0"});
    setTimeout(function(){
        $(".animationLogo").css("display","block");
        $(".animationLogo").animate({opacity:1},2000);
    },6500)
});
$(function(){
   var typed= new Typed(".typed",{
    strings : [
        "Welcome to My portfolio",
        "let s scroll down"
    ],
    typeSpeed:100,
    startDelay:6500,
    backSpeed:60,
    loop:true,
    loopCount:2,
    showCursor:false,
    backDelay:500
   })
  });
  
