//based on hero.js, but with considerations for home page layout
$(document).ready(function(){
	'use strict';
	
	//check for .subHero sections. if none, don't bother checking again
//	var subHero = false;
//	if($(".subHero").length !== 0){
//		subHero = true;
//	}
	
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
		
		//if window width <=720, subtract height of 2nd element
		if($(window).width() <= 720){
			heroHeight = heroHeight - $("#tileTop").height();
			console.log($("#tileTop").height());
		}
		
		//subtract height of top grid item from heroHeight
		//heroHeight = heroHeight - $("div#gridHome a:first-child").height();
		
		$(".tileHeroOverlay").css({
			"min-height" : heroHeight
		});
		
		//set the .heroImages to be the height of the hero section
		$(".tileHeroImage").css({
			"height" : $('.tileHero').height(),
			"width" : $('.tileHero').width(),
			"top" : $('#headers').height()
		});
	}
	
	var n = 1; //keep track of which nth child we should show
	var nLast = $(".tileHeroImage").length;
	var nDelay = 7500; //how long should each nth child be on-screen in millis?
	
	$(".tileHeroImage:nth-child("+(1)+")").removeClass("fadeOut");
	$(".tileHeroImage:nth-child("+(1)+")").addClass("fadeIn");
	$(".tileHeroImage:not(:nth-child("+(1)+"))").addClass("fadeOut");
	$(".tileHeroImage:not(:nth-child("+(1)+"))").removeClass("fadeIn");
	
	//every nDelay, count up n until number of images, then set to 1
	setInterval(function(){
		n = n+1;
		
		if(n > nLast){
			n = 1;
		}
		
		//fade in current n
		$(".tileHeroImage:nth-child("+(n)+")").removeClass("fadeOut");
		$(".tileHeroImage:nth-child("+(n)+")").addClass("fadeIn");
		//fade out all else
		$(".tileHeroImage:not(:nth-child("+(n)+"))").addClass("fadeOut");
		$(".tileHeroImage:not(:nth-child("+(n)+"))").removeClass("fadeIn");
	}, nDelay);
});