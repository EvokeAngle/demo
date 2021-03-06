

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();
//重新定义窗口大小
$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});
//设置进度条
(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			$ele.show();
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
					while (str.substr(progress, 1) == "\t")
						progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 100);
		});
		return this;
	};
})(jQuery);
//时间跳转
function timeElapse(date){
	var current = new Date();
	var date_in_this_year = new Date(date);
	date_in_this_year.setFullYear(current.getFullYear());
	var years = current.getFullYear() - date.getFullYear(), seconds;
	if(Date.parse(current) < Date.parse(date_in_this_year)) {
		date_in_this_year.setFullYear(current.getFullYear() - 1);
		years -= 1;
	}
	var seconds = (Date.parse(current) - Date.parse(date_in_this_year)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + years + "</span> 年 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
