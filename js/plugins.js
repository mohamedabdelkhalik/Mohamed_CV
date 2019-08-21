$(document).ready(function(e) {
    $('.carousel').carousel({
      interval: 3000
});
//toogle color-option-box
 $(".gear-check").click(function(){
	 $(".color-option").fadeToggle();
 });
 
 //option color
 var colop = $(".color-option ul li");
 colop
 .eq(0).css("backgroundColor","#E41B17").end()
 .eq(1).css("backgroundColor","#1730e4").end()
 .eq(2).css("backgroundColor","#2de417").end()
 .eq(3).css("backgroundColor","#ea0db1");
 
 colop.click(function()
      {
	 
	 $("link[href*='them']").attr("href",$(this).attr("data-value"));
	 
});

//scroll
 $(window).scroll(function(){
	 if($(this).scrollTop() >= 700){
		 $(".scroll-top").show();
	 }else{
		 $(".scroll-top").hide();
	 }

 });

//click scroo;
	$(".scroll-top").click(function()
	{
		$("html,body").animate({scrollTop : 0},600);
		
	});
	
});
 //loading 
 $(window).load(function(){
	 $(".overlay .sk-cube-grid").fadeOut(4000,
	 function(){
		 			 	 $("body").css("overflow","auto");

		 $(this).parent().fadeOut(2000,
		 function(){
			 $(this).remove();
			 
		 });
	 });
 });
 
 
