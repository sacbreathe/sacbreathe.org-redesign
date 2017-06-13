$(document).ready(function(){
	'use strict';
	
	//check for .subHero sections. if none, don't bother checking again
	var subHero = false;
	if($(".subHero").length !== 0){
		subHero = true;
	}
	
	heroStyles();
	
	$(window).resize(function(){
		heroStyles();
	});
	
	var heroHeight;
	function heroStyles(){
		//set the min-height of the hero div to be window - #headers
		heroHeight = ($(window).height() - $('#headers').height());
		
		//if there is a .subHero section, subtract that from the heroHeight, too
		if(subHero === true){
			heroHeight = heroHeight - $(".subHero").height();
		}
		
		//apply heroHeight
		$("#hero").css({
			"min-height" : heroHeight
		});
		
		//set the .heroImages to be that height
		$(".heroImage").css({
			"height" : heroHeight
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