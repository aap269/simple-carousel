$(function(){
var slideWidth=$('.slide').width(), //800
    position=0,
    numSlides = $('.slide').size(),
    trayWidth=slideWidth * numSlides;

    $('.tray').width(trayWidth);

    function slide(){

    	var distance = slideWidth * position;
        $('.tray').animate({right:distance}, 600);

    }

    $('.next').click(function(){
    	if(position === numSlides -1){
    		position=0;
    	}
    	else{
    	 	position++;

    	}
			slide();

    });

    $('.prev').click(function(){
    	if(position === 0){
    		position=numSlides-1;
    	}
    	else{
    	 	position--;

    	}

    	slide();

    });

    	$('.prev, .next').hide();

$('.frame').hover(function(){
$('.prev, .next').show();
}, function(){

	$('.prev, .next').hide();
});

});