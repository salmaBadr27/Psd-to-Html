$(function () {
	"use strict";
	var winH = $(window).height(),
		upperBarH = $(".upper-bar").innerHeight(),
		navH = $(".navbar").innerHeight();
	var sliderH = winH - (upperBarH + navH);
	$(".slider").height(sliderH);
	$(".carousel-item").height(sliderH);

	$(".featured-work ul li").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
		if ($(this).data("class") === "all") {
			$(".shuffle-imgs .col-sm").css("opacity", 1);
		} else {
			$(".shuffle-imgs .col-sm").css("opacity", ".08");
			$($(this).data("class")).parent().css("opacity", 1);
		}
	});
});
