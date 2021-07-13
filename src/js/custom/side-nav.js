(function () {
	let content = [
		"Our vision is to keep the world communicating safely and sustainably.",
		"Our mission is to provide the most advanced and flexible cloud communications platform that is secure, scalable and innovative.",
		"We are commited in being ethical and inclusive in pursuit of greatness.",
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
