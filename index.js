//Used to animate the background
$(document).ready(function() {
	$("#CalcPic").hover(function() {
		$(this).animate({
			width: '13.3em',
			height: '13.3em',
		}, 0.3);
	}, function() {
		$(this).animate({
			width: '13em',
			height: '13em',
		}, 0.3);
	});

	$("#projGolemPic").click(function() {
		window.location.href= "\GolemTextConverter/GolemTextConverter.html";	
	});

	$("#CalcPic").click(function() {
		window.location.href= "\GolemTextConverter/GolemTextConverter.html";	
	});	
});

