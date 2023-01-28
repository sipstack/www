function apiRequest(uri = "", method = "GET", data = [], dataType = "JSON", async = true) {
	if (uri == "") return false;
	// var url = "https://api.sipstack.com/v2";
	let url = "http://127.0.0.1:3000/v2";
	// Ajax call
	return $.ajax({
		url: `${url}/${uri}`,
		type: method,
		data,
		dataType,
		async,
		xhrFields: {
			withCredentials: true,
		},
		crossDomain: true,
		error: (error) => {},
	});
}

$("#signupSubmit").on("click", () => {
	apiRequest("-/www/contact/join", "POST", $(".contact-form").serialize());
});

$("#contactusSubmit").on("click", () => {
	apiRequest("-/www/contact/join", "POST", $(".contact-form").serialize());
});
