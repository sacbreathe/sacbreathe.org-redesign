//based on hero.js, but with considerations for home page layout
$(document).ready(function(){
	'use strict';
	
	//check for .subHero sections. if none, don't bother checking again
	var subHero = false;
	if($(".subHero").length !== 0){
		subHero = true;
	}
	
	//functions on load
	heroStyles();
	//functions on resize
	$(window).resize(function(){
		heroStyles();
	});
	
	var heroHeight;
	function heroStyles(){
		//start by subtracting height of the headers
		heroHeight = ($(window).height() - $('#headers').height());
		
		//subtract height of top grid item from heroHeight
		heroHeight = heroHeight - $("div#gridHome a:first-child").height();
		
		$("#hero").css({
			"min-height" : heroHeight
		});
		
		//set the .heroImages to be the height of the hero section
		$(".heroImage").css({
			"height" : $('#hero').height()
		});
	}
	
	var n = 1; //keep track of which nth child we should show
	var nLast = $(".heroImage").length;
	var nDelay = 7500; //how long should each nth child be on-screen in millis?
	
	$(".heroImage:nth-child("+(1)+")").removeClass("fadeOut");
	$(".heroImage:nth-child("+(1)+")").addClass("fadeIn");
	$(".heroImage:not(:nth-child("+(1)+"))").addClass("fadeOut");
	$(".heroImage:not(:nth-child("+(1)+"))").removeClass("fadeIn");
	
	//every nDelay, count up n until number of images, then set to 1
	setInterval(function(){
		n = n+1;
		
		if(n > nLast){
			n = 1;
		}
		
		//fade in current n
		$(".heroImage:nth-child("+(n)+")").removeClass("fadeOut");
		$(".heroImage:nth-child("+(n)+")").addClass("fadeIn");
		//fade out all else
		$(".heroImage:not(:nth-child("+(n)+"))").addClass("fadeOut");
		$(".heroImage:not(:nth-child("+(n)+"))").removeClass("fadeIn");
	}, nDelay);
});