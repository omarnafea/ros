



$(function(){

'use strict';

var winH=$(window).height(),
upperH=$('.upper-bar').innerHeight(),
navH=$('.navbar').innerHeight();
//$('.slider').height(winH-(upperH+navH));




// featured work shuffle

$('.featured-work ul li').on('click',function(){

$(this).addClass('active').siblings().removeClass('active');
console.log($(this).data('class'));

if($(this).data('class')==='all'){
	$('.shuffle-images .col-sm').css('opacity',1);

}else{
	$('.shuffle-images .col-sm').css('opacity','.08');
	$($(this).data('class')).parent().css('opacity',1);

}

});
});