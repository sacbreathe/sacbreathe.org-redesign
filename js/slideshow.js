$(document).ready(function(){
	'use strict';
	
	var slideIndex = 0;
	carousel();

	function carousel() {
		var i;
		var x = document.getElementsByClassName("mySlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none"; 
		}
		slideIndex++;
		if (slideIndex > x.length) {slideIndex = 1} 
    	x[slideIndex-1].style.display = "block"; 
    	setTimeout(carousel, 2000); // Change image every 2 seconds
	}
	
	
//	styles();
//	
//	$(window).resize(function(){
//		styles();
//	});
	
//	var heightHeader;
//	var heightSubheader = 0;
//	var heightHeaderSpacer;
//
//	function styles(){
//		heightHeader = $("header").height();
//		
//		//check for a subheader
//		if ($("subheader").length !== 0){
//			heightSubheader = $("subheader").outerHeight();
//		}
//		
//		heightHeaderSpacer = heightHeader + heightSubheader;
//		
//		$("div#headerSpacer").css("height",heightHeaderSpacer);
//		
		//make sure that content always starts under header
//		$("div#content").css("padding-top",heightHeader);
		//make sure that the content is always at least the height of the screen minus the 
//		$("div#content").css("min-height",heightWindowLessHeader);
		
		//make sure gridPhotos li are square, based on screen width
//		if(contentInnerWidth >= 720){
//			gridPhotosPerRow = 4;
//		} else if (contentInnerWidth < 720 && contentInnerWidth > 480) {
//			gridPhotosPerRow = 3;
//		} else if (contentInnerWidth < 480 && contentInnerWidth > 360) {
//			gridPhotosPerRow = 2;
//		} else if (contentInnerWidth <= 360){
//			gridPhotosPerRow = 2;
//		}
//		
//		$("ul.gridPhotos li").css("width",contentInnerWidth/gridPhotosPerRow);
//		$("ul.gridPhotos li").css("height",contentInnerWidth/gridPhotosPerRow);
	} 
});