(function () {
	$("#banner-container").on("click", function () {
		// window.location.href = "the_link_to_go_to.html";
	});

	// Hide banner when exit button is clicked
	$("#banner-btn").on("click", function () {
		$("#banner-container").hide();
	});
})();
