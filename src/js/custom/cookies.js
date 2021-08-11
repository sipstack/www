(function () {
	$("body").append(`
		<div id="cookie-container">
			<div id="cookie-description">
				We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our 
				<a href ="/legal/privacypolicy.html">Privacy Policy</a>. By continuing to browse our website, you agree to our use of cookies.
			</div>
			<button id="cookie-btn">I understand</button>
		</div>
	`);

	// Hide consent banner if consent has previously been provided
	if (JSON.parse(localStorage.getItem("ss_cs"))["cookie"].accepted === true) {
		$("#cookie-container").hide();
	}

	// Store the time and date of consent
	$("#cookie-btn").on("click", function () {
		let new_ss_cs = JSON.parse(localStorage.getItem("ss_cs"));
		new_ss_cs["cookie"].date = new Date();
		new_ss_cs["cookie"].accepted = true;
		localStorage.setItem("ss_cs", JSON.stringify(new_ss_cs));

		$("#cookie-container").hide();
	});
})();
