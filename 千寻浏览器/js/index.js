/*
* @Author: joe
* @Date:   2018-01-17 14:34:53
* @Last Modified by:   joe
* @Last Modified time: 2018-01-22 09:24:55
*/
$(function(){
	$("section>div").eq(0).removeClass("all");
	var num=0;
	$("ol>li").click(function(event) {
		$("section").animate({"top":-100*$(this).index()+"%"});
		$(this).addClass("color");
		$(this).siblings().removeClass("color");
		num=$(this).index();
		$("section>div").eq($(this).index()).removeClass("all");
		$("section>div").eq($(this).index()).siblings().addClass('all');
	});
	var time;
	$(document).mousewheel(function(event,a){
		clearTimeout(time);
		time=setTimeout(function(){
			num=num-a;
		if(num<0){num=0}
		if(num>6){num=6}
		$("section").animate({"top":-100*num+"%"});
		$("ol>li").eq(num).addClass("color");
		$("ol>li").eq(num).siblings().removeClass("color");
		$("section>div").eq(num).removeClass("all");
		$("section>div").eq(num).siblings().addClass("all");
		},300)

	})
	$(".music").click(function(event) {
					$(this).toggleClass("rotate");
					if($("audio")[0].paused){
						$("audio")[0].play();
					}else{
						$("audio")[0].pause();
					}
				});
});