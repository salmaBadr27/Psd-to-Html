$(function () {
	"use strict";
	var winH = $(window).height(),
		upperBarH = $(".upper-bar").innerHeight(),
		navH = $(".navbar").innerHeight();
	var sliderH = winH - (upperBarH + navH);
	$(".slider").height(sliderH);
	$(".carousel-item").height(sliderH);
});
