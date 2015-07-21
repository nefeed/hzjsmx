$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$("#side-bar .gotop").fadeIn();	
		}
		else{
			$("#side-bar .gotop").hide();
		}
	});
	$("#side-bar .gotop").click(function(){
		$('html,body').animate({'scrollTop':0},500);
	});
});