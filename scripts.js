var carouselList = $("#carousel ul");
var interval = setInterval(function(){ changeSlide()}, 4000);

function changeSlide() {
	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
}

 function moveFirstSlide() {
  	var firstItem = carouselList.find("li:first");
  	var lastItem = carouselList.find("li:last");

	lastItem.after(firstItem);
  	carouselList.css({marginLeft:0});
}

function moveLastSlide() {
 	var firstItem = carouselList.find("li:first");
 	var lastItem = carouselList.find("li:last");
	
 	firstItem.before(lastItem);
 	carouselList.css({marginLeft: -400});
}

function resetInterval() {
	clearInterval(interval);
	interval = setInterval(moveFirstSlide, 6000);
}

var left = document.getElementById('left');
var right = document.getElementById('right');

left.addEventListener('click', function() { 
	resetInterval();
 	carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
 });
 
 
right.addEventListener('click', function() {
 	resetInterval();
 	moveLastSlide();
 	carouselList.animate({'marginLeft': 0}, 500);
}); 