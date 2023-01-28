(function () {
	if (getStorage("banner") == "hidden") {
		$("#banner-container").hide();
	}

	// $("#banner-description").on("click", function () {
	// 	// REDIRECT LINK
	// 	window.open("https://www.sipstack.com/community/announcing-ucs-transition-into-open-source/", "_self").focus();
	// });

	// Hide banner when exit button is clicked
	$("#banner-btn").on("click", function () {
		sessionStorage.setItem("banner", "hidden");
		$("#banner-container").hide();
	});
})();
