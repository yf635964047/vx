$(function() {
//	ctrl+shift+f
	//	获取屏幕的宽高
	var nowpage = 0;
	//	当前页数
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(4 * height);

	$(".page").width(width);
	$(".page").height(height);
	//不是jquery自带的，是引入的插件
	//手指触屏滑动的事件

	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction=="up"){
				nowpage++;
			}
			
			$(".content").animate({top:-nowpage*100+"%"},{duration:400})
		}
	});
//	animate({要做的动画效果},{duration:动画时长,comlete:动画执行完了要做的事情})
	
})

/*$(document).ready(function(){
	
})*/

//等文档完成之后再执行js代码