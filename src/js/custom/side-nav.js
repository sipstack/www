(function () {
	let content = [
		"We foster the global developer and entrepreneurial communities because they are the source of our ideas and innovation and essential to our sustained growth.",
		"We make decisions that eliminate complexity and obstacles to our moving fast so we can enable our customers to focus on testing their Ideas, building their businesses and realizing their dreams.",
		"We create an environment where we are transparent and respectful so we are confident in bringing our best selves on behalf of our customers and each other, every day.",
	];

	// Index of current selected option
	let currentIndex = 0;

	// Set default text content
	$("#side-nav-text").text(content[currentIndex]);

	$(".side-nav-btn").click(function () {
		if ($(this).data("key") !== currentIndex) {
			// Hide text content
			$("#side-nav-text").fadeOut(0);

			// Replace text content
			$(".side-nav-btn").removeClass("active");
			$(this).addClass("active");
			$("#side-nav-text").text(content[$(this).data("key")]);

			// Fade in new text content
			$("#side-nav-text").fadeIn(300);

			currentIndex = $(this).data("key");
		}
	});
})();
