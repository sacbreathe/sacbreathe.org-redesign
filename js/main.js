// JavaScript Document
$(document).ready(function(){
	'use strict';
	styles();
	
	$(window).resize(function(){
		styles();
	});
	
	var heightHeader;
	var heightSubheader = 0;
	var heightHeaderSpacer;

	function styles(){
		heightHeader = $("header").height();
		
		
		//check for a subheader
		if ($("subheader").length !== 0){
			heightSubheader = $("subheader").outerHeight();
		}
		
		if($("#headers").css("position") === "fixed"){
			//desktop
			$("#headerSpacer").css({
				"height" : $('#headers').height()
			});
		} else {
			$("#headerSpacer").css({
				"height" : 0
			});
		}
		
		heightHeaderSpacer = $("#headerSpacer").height();
		
//		heightHeaderSpacer = heightHeader + heightSubheader;
//		
//		$("div#headerSpacer").css("height",heightHeaderSpacer);
		
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
	
//smooth scrolling function	
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: (target.offset().top - heightHeaderSpacer)
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
			
//          var $target = $(target);
//          $target.focus();
//          if ($target.is(":focus")) { // Checking if the target was focused
//            return false;
//          } else {
//            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//            $target.focus(); // Set focus again
//          };
			
        });
      }
    }
  });
		
});