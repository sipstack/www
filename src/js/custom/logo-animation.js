(function () {
	$(window).on("scroll", () => {
		if ($("html, body").scrollTop() > ($(".la-container").offset().top - 400) * 0.96) {
			$(".la-block-1, .la-block-7").addClass("la-block-trans-0");
			$(".la-block-2, .la-block-3, .la-block-6, .la-block-8").addClass("la-block-trans-n45");
			$(".la-block-4, .la-block-5").addClass("la-block-trans-45");
			$(".la-container").addClass("la-container-trans");
		}
	});
	$(".la-container").on("mouseenter", () => {
		$(".la-block-1, .la-block-7").removeClass("la-block-trans-0");
		$(".la-block-2, .la-block-3, .la-block-6, .la-block-8").removeClass("la-block-trans-n45");
		$(".la-block-4, .la-block-5").removeClass("la-block-trans-45");
		$(".la-container").removeClass("la-container-trans");
	});
	$(".la-container").on("mouseleave", () => {
		$(".la-block-1, .la-block-7").addClass("la-block-trans-0");
		$(".la-block-2, .la-block-3, .la-block-6, .la-block-8").addClass("la-block-trans-n45");
		$(".la-block-4, .la-block-5").addClass("la-block-trans-45");
		$(".la-container").addClass("la-container-trans");
	});
})();
