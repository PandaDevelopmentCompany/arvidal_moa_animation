// Добавление класса к пункту меню recent news
function myFunction() {
var element = document.getElementById("menu-item-90");
element.classList.add("mfn-off-canvas-switcher");
var element1 = document.getElementById("menu-item-1715");
element1.classList.add("mfn-off-canvas-switcher");
var element2 = document.getElementById("menu-item-1861");
element2.classList.add("mfn-off-canvas-switcher");
}
function ready() {
	 alert( 'DOM ready' );
 }
document.addEventListener("DOMContentLoaded", function(){
myFunction();
});


jQuery(function($){ $("li.menu-item-1916").addClass("mfn-off-canvas-switcher");
});
jQuery(function($){ $("li.menu-item-1929").addClass("mfn-off-canvas-switcher");
});
jQuery(function($){ $("li.menu-item-1940").addClass("mfn-off-canvas-switcher");
});





// циркулирующая анимация



jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_0_1').offset().top;
	var eh = $('.main_animation_0_0_1').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_0_1").addClass("fadeInLeft, pre_main_animation_0_0_1");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_0_1").removeClass("fadeInLeft");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});






jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_0_2').offset().top;
	var eh = $('.main_animation_0_0_2').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_0_2").addClass("fadeInLeft");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_0_2").removeClass("fadeInLeft");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});





jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_1').offset().top;
	var eh = $('.main_animation_0_1').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_1").addClass("fadeInRight, pre_main_animation_0_1");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_1").removeClass("fadeInRight");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});





jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_2').offset().top;
	var eh = $('.main_animation_0_2').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_2").addClass("fadeInRight");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_2").removeClass("fadeInRight");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




// new moa block
jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_4').offset().top;
	var eh = $('.main_animation_0_4').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_4").addClass("fadeInUp");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_4").removeClass("fadeInUp");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});


jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_1').offset().top;
	var eh = $('.main_animation_moa_0_1').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_1").addClass("fadeInLeft");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_1").removeClass("fadeInLeft");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});



jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_2').offset().top;
	var eh = $('.main_animation_moa_0_2').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_2").addClass("fadeInUp");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_2").removeClass("fadeInUp");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_3').offset().top;
	var eh = $('.main_animation_moa_0_3').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_3").addClass("fadeInUp");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_3").removeClass("fadeInUp");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_4').offset().top;
	var eh = $('.main_animation_moa_0_4').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_4").addClass("fadeInRight");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_4").removeClass("fadeInRight");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_5').offset().top;
	var eh = $('.main_animation_moa_0_5').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_5").addClass("fadeInLeft");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_5").removeClass("fadeInLeft");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_6').offset().top;
	var eh = $('.main_animation_moa_0_6').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_6").addClass("fadeInRight");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_6").removeClass("fadeInRight");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_7').offset().top;
	var eh = $('.main_animation_moa_0_7').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_7").addClass("fadeInLeft");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_7").removeClass("fadeInLeft");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_moa_0_8').offset().top;
	var eh = $('.main_animation_moa_0_8').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_moa_0_8").addClass("fadeInRight");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_moa_0_8").removeClass("fadeInRight");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});
// end MOA






jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_13').offset().top;
	var eh = $('.main_animation_0_13').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_13").addClass("fadeInLeft");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_13").removeClass("fadeInLeft");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});





jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_14').offset().top;
	var eh = $('.main_animation_0_14').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_14").addClass("fadeInRight");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_14").removeClass("fadeInRight");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_0_15').offset().top;
	var eh = $('.main_animation_0_15').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_0_15").addClass("fadeInUp");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_0_15").removeClass("fadeInUp");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});











jQuery(function($){
	var block_show = null;
function scrollTracking(){
	var wt = $(window).scrollTop();
	var wh = $(window).height();
	var et = $('.main_animation_1').offset().top;
	var eh = $('.main_animation_1').outerHeight();
	if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
		if (block_show == null || block_show == false) {
			$(".main_animation_1").addClass("fadeInRight");
		}
		block_show = true;
	} else {
		if (block_show == null || block_show == true) {
			$(".main_animation_1").removeClass("fadeInRight");
		}
		block_show = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});



	jQuery(function($){
	var block_show_2 = null;
function scrollTracking(){
	var wt_2 = $(window).scrollTop();
	var wh_2 = $(window).height();
	var et_2 = $('.main_animation_2').offset().top;
	var eh_2 = $('.main_animation_2').outerHeight();
	if (wt_2 + wh_2 >= et_2 && wt_2 + wh_2 - eh_2 * 2 <= et_2 + (wh_2 - eh_2)){
		if (block_show_2 == null || block_show_2 == false) {
			$(".main_animation_2").addClass("fadeInLeft");
		}
		block_show_2 = true;
	} else {
		if (block_show_2 == null || block_show_2 == true) {
			$(".main_animation_2").removeClass("fadeInLeft");
		}
		block_show_2 = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});

	

	jQuery(function($){
	var block_show_3 = null;
function scrollTracking(){
	var wt_3 = $(window).scrollTop();
	var wh_3 = $(window).height();
	var et_3 = $('.main_animation_3').offset().top;
	var eh_3 = $('.main_animation_3').outerHeight();
	if (wt_3 + wh_3 >= et_3 && wt_3 + wh_3 - eh_3 * 2 <= et_3 + (wh_3 - eh_3)){
		if (block_show_3 == null || block_show_3 == false) {
			$(".main_animation_3").addClass("fadeInRight");
		}
		block_show_3 = true;
	} else {
		if (block_show_3 == null || block_show_3 == true) {
			$(".main_animation_3").removeClass("fadeInRight");
		}
		block_show_3 = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




	jQuery(function($){
	var block_show_4 = null;
function scrollTracking(){
	var wt_4 = $(window).scrollTop();
	var wh_4 = $(window).height();
	var et_4 = $('.main_animation_4').offset().top;
	var eh_4 = $('.main_animation_4').outerHeight();
	if (wt_4 + wh_4 >= et_4 && wt_4 + wh_4 - eh_4 * 2 <= et_4 + (wh_4 - eh_4)){
		if (block_show_4 == null || block_show_4 == false) {
			$(".main_animation_4").addClass("fadeInLeft");
		}
		block_show_4 = true;
	} else {
		if (block_show_4 == null || block_show_4 == true) {
			$(".main_animation_4").removeClass("fadeInLeft");
		}
		block_show_4 = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});
	



	jQuery(function($){
	var block_show_5 = null;
function scrollTracking(){
	var wt_5 = $(window).scrollTop();
	var wh_5 = $(window).height();
	var et_5 = $('.main_animation_5').offset().top;
	var eh_5 = $('.main_animation_5').outerHeight();
	if (wt_5 + wh_5 >= et_5 && wt_5 + wh_5 - eh_5 * 2 <= et_5 + (wh_5 - eh_5)){
		if (block_show_5 == null || block_show_5 == false) {
			$(".main_animation_5").addClass("fadeInRight");
		}
		block_show_5 = true;
	} else {
		if (block_show_5 == null || block_show_5 == true) {
			$(".main_animation_5").removeClass("fadeInRight");
		}
		block_show_5 = false;
	}
}
$(window).scroll(function(){
	scrollTracking();
});
$(document).ready(function(){
	scrollTracking();
});
});




// Активные бордеры
// 

// let cards = document.querySelectorAll(".cards");
// for( let i = 0; i < cards.length; i++){
// cards[i].onmousemove = e => {
//   for(const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//     x = e.clientX - rect.left,
//     y = e.clientY - rect.top;
//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   };
// }
// }



let cards_new_animation = document.querySelectorAll(".cards_new_animation");
for( let i = 0; i < cards_new_animation.length; i++){
cards_new_animation[i].onmousemove = e => {
for(const card of document.getElementsByClassName("card")) {
  const rect = card.getBoundingClientRect(),
  x = e.clientX - rect.left,
  y = e.clientY - rect.top;
  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
};
}
}






























































jQuery(function ($) {
  function trackScrollAnimation(selector, animationClass) {
    var blockVisible = null;

    function scrollTracking() {
      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $(selector).offset().top;
      var eh = $(selector).outerHeight();

      if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
        if (blockVisible == null || blockVisible === false) {
          $(selector).addClass(animationClass);
        }
        blockVisible = true;
      } else {
        if (blockVisible == null || blockVisible === true) {
          $(selector).removeClass(animationClass);
        }
        blockVisible = false;
      }
    }

    $(window).scroll(scrollTracking);
    $(document).ready(scrollTracking);
  }

  // Вызов функции для разных блоков
  trackScrollAnimation('.main_animation_0_0_1', 'fadeInLeft');
  trackScrollAnimation('.main_animation_0_0_2', 'fadeInLeft');
  trackScrollAnimation('.main_animation_0_1', 'fadeInRight');
  trackScrollAnimation('.main_animation_0_2', 'fadeInRight');
  trackScrollAnimation('.main_animation_0_4', 'fadeInUp');
  trackScrollAnimation('.main_animation_moa_0_1', 'fadeInLeft');
  trackScrollAnimation('.main_animation_moa_0_2', 'fadeInUp');
  trackScrollAnimation('.main_animation_moa_0_3', 'fadeInUp');
  trackScrollAnimation('.main_animation_moa_0_4', 'fadeInRight');
  trackScrollAnimation('.main_animation_moa_0_5', 'fadeInLeft');
  trackScrollAnimation('.main_animation_moa_0_6', 'fadeInRight');
  trackScrollAnimation('.main_animation_moa_0_7', 'fadeInLeft');
  trackScrollAnimation('.main_animation_moa_0_8', 'fadeInRight');
  trackScrollAnimation('.main_animation_0_13', 'fadeInLeft');
  trackScrollAnimation('.main_animation_0_14', 'fadeInRight');
  trackScrollAnimation('.main_animation_0_15', 'fadeInUp');
  trackScrollAnimation('.main_animation_1', 'fadeInRight');
  trackScrollAnimation('.main_animation_2', 'fadeInLeft');
  trackScrollAnimation('.main_animation_3', 'fadeInRight');
  trackScrollAnimation('.main_animation_4', 'fadeInLeft');
  trackScrollAnimation('.main_animation_5', 'fadeInRight');
});
