$("document").ready(function(){
	$("#sports-nav").click(function(){
		$(".line").removeClass('center left right');
		$(".line").addClass('left');
		$.fn.fullpage.moveTo('home', 0);
	});
});

$("document").ready(function(){
	$("#general-nav").click(function(){
		$(".line").removeClass('center left right');
		$(".line").addClass('center');
		$.fn.fullpage.moveTo('home', 1);
	});
});

$("document").ready(function(){
	$("#projects-nav").click(function(){
		$(".line").removeClass('center left right');
		$(".line").addClass('right');
		$.fn.fullpage.moveTo('home', 2);
	});
});

//first slide of the second section
    if(anchorLink == 'home' && slideIndex == 0){
        $(".line").removeClass('center left right');
		$(".line").addClass('left');
    }

    if(anchorLink == 'home' && slideIndex == 1){
        $(".line").removeClass('center left right');
		$(".line").addClass('center');
    }

    if(anchorLink == 'home' && slideIndex == 2){
        $(".line").removeClass('center left right');
		$(".line").addClass('right');
    }