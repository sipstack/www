(function () {
	if (getStorage("banner") == "hidden") {
		$("#banner-container").hide();
	}

	$("#banner-description").on("click", function () {
		window.open("https://www.sipstack.com/community/announcing-ucs-transition-into-open-source/", "_blank").focus();
	});

	// Hide banner when exit button is clicked
	$("#banner-btn").on("click", function () {
		sessionStorage.setItem("banner", "hidden");
		$("#banner-container").hide();
	});
})();
