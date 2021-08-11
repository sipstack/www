(function () {
	let content = [
		"Our mission is to provide the most advanced and flexible cloud communications platform that is secure, scalable and innovative.",
		"Keep the world communicating by building software that is future-proof, sustainable and designed to scale from the ground up.",
		"To be ethical, fair, trustworthy and inclusive in our pursuit of greatness.",
	];

	// Index of current selected option
	let currentIndex = 0;

	// Set default text content
	$("#side-nav-text").text(content[currentIndex]);
	console.log(content[currentIndex]);

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
