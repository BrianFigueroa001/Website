//Used to animate the background
$(document).ready(function() {

	$("#projGolemPic").hover(function() {
		$(this).animate({
			width: '15.7em',
			height: '15.7em',
		}, 0.3);
	}, function() {
		$(this).animate({
			width: '15em',
			height: '15em',
		}, 0.3);
	});

	$("#projGolemPic").click(function() {
		window.location.href= "\GolemTextConverter/GolemTextConverter.html";	
	});
});

