$(document).ready(function(){
	'use strict';
	//if we have a .modalOverlay section, fade it in and disable scrolling
	if($(".modalOverlay").length !== 0){
		$("body").addClass("modalOpen");
	}
	
	$(".modalEsc").click(function(){
		$("body").removeClass("modalOpen");
		$(".modalOverlay").addClass("modalClose");
		$(".modalWindow").addClass("modalClose");
	});
	
	$(".modalOverlay").click(function(){
		$("body").removeClass("modalOpen");
		$(".modalOverlay").addClass("modalClose");
		$(".modalWindow").addClass("modalClose");
	});
});