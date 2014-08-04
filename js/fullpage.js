$(document).ready(function() {
	$('#fullpage').fullpage({
		slidesColor: ['#ffffff', '#ffffff', '#ffffff'],
		anchors: ['home', 'services1', '3rdPage', '4thpage', 'lastPage'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){

			//section 2
			if(index == 2){
				//moving the image
				$('#section1').find('img').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
				
				$('#section1').find('p').first().fadeIn(1800, function(){
					$('#section1').find('p').last().fadeIn(1800);
				});;
				
			}
			
			//section 3
			if(anchorLink == '3rdPage'){
				//moving the image
				$('#section2').find('.intro').delay(500).animate({
					left: '0%'
				}, 1500, 'easeOutExpo');
			}

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
		}
	});
	
});