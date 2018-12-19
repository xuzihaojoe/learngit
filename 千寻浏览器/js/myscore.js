/*
* @Author: joe
* @Date:   2018-01-22 21:22:56
* @Last Modified by:   joe
* @Last Modified time: 2018-01-26 14:57:51
*/
$(function(){
	$(".data>li").click(function(event) {
		$(this).addClass("style");
		$(this).siblings().removeClass("style");
	});

	var num=0;
	var time;
	time=setInterval(function(){
		num++;
		if (num>4) {
			num=0
		}
		if (num==0) {
		$(".bright>ul").css({"left":-747*num+"px"});
		num++;
		$(".bright>ul").animate({"left":-747*num+"px"});	
	}else{
		$(".bright>ul").animate({"left":-747*num+"px"});
	}
	},2000)
    
    $(".bright").hover(function() {
    	clearInterval(time);
    }, function() {
    	time=setInterval(function(){
		num++;
		if (num>4) {
			num=0
		}
		if (num==0) {
		$(".bright>ul").css({"left":-747*num+"px"});
		num++;
		$(".bright>ul").animate({"left":-747*num+"px"});	
	}else{
		$(".bright>ul").animate({"left":-747*num+"px"});
	}
	},2000)
    });



	$(".brr").click(function(event) {
		
		num++;
		if (num>4) {
			num=0;
		}
		if (num==0) {
		$(".bright>ul").css({"left":-747*num+"px"});
		num++;
		$(".bright>ul").animate({"left":-747*num+"px"});	
	}else{
		$(".bright>ul").animate({"left":-747*num+"px"});
	}
		
	});





	$(".brl").click(function(event) {
		
		--num;
		console.log(num);
		if (num<0) {
			num=4;
		}
		if (num==4) {
		$(".bright>ul").css({"left":-747*num+"px"});
		num--;
		$(".bright>ul").animate({"left":-747*num+"px"});	
	}else{
		$(".bright>ul").animate({"left":-747*num+"px"});
	}
	
	});
})