$("document").ready(function(){
	$("#sports-nav").click(function(){
		$(".line").removeClass('center left right');
		$(".line").addClass('left');
	});
});

$("document").ready(function(){
	$("#general-nav").click(function(){
		$(".line").removeClass('center left right');
		$(".line").addClass('center');
	});
});

$("document").ready(function(){
	$("#projects-nav").click(function(){
		$(".line").removeClass('center left right');
		$(".line").addClass('right');
	});
});