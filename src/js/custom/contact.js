(function () {
	$(".login-form").on("submit", function () {
		$.ajax({
			type: "POST",
			url: "https://dev.api.sipstack.com/v1/-/www/signup",
			data: $(this).serialize(),
			success: () => {
				window.location.href = `${window.location.origin}`;
			},
			error: (XMLHttpRequest) => {
				console.log(XMLHttpRequest.responseText);
			},
		});
	});

	// Hide "More info" field by defeault
	$("#contact-discover-info").hide();

	// Add "More Info" field depending on which option is selected
	$("select[name='discover']").on("change", function () {
		let selected = $("select[name='discover']").val();

		if (selected == "partner" || selected == "employee" || selected == "other") {
			$("#contact-discover-info input").attr("placeholder", `example-${selected}`);

			$("#contact-discover-info").show();
		} else $("#contact-discover-info").hide();
	});
})();
