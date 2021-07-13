(function () {
	$(".contact-btn").on("click", function () {
		$.ajax({
			type: "POST",
			url: "https://dev.api.sipstack.com/v1/-/www/contact",
			data: $(".contact-form").serialize(),
			success: () => {
				window.sessionStorage.setItem("ss_snackbar", JSON.stringify({ variant: "success", message: "Message recieved. We'll get back to you shortly!" }));
				window.location.href = `${window.location.origin}`;
			},
			error: (XMLHttpRequest) => {
				window.sessionStorage.setItem("ss_snackbar", JSON.stringify({ variant: "danger", message: "There was a server error. We'll get right on it." }));
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
