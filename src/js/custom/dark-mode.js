// get session OR local storage
function getStorage(key, type = "session") {
	var value = "";
	switch (type) {
		case "session":
			value = sessionStorage.getItem(key);
			break;
		case "local":
			value = localStorage.getItem(key);
			break;
	}
	if (value) {
		if (value[0] == "{" || value[0] == "[") value = JSON.parse(value);
	}

	return value;
}

function updateTheme() {
	let ss_test = getStorage("ss_test", "local");

	if (ss_test.theme == "light") {
		$(".theme-switcher").find(".bi-sun").css("display", "flex");
		$(".theme-switcher").find(".bi-sun-fill").css("display", "none");

		document.body.style.setProperty("--main-background-color", "#ffffff");
		document.body.style.setProperty("--primary-heading-color", "#383e45");
		document.body.style.setProperty("--dynamic-text-color", "#4b505e");

		console.log("light");
	} else if (ss_test.theme == "dark") {
		$(".theme-switcher").find(".bi-sun-fill").css("display", "flex");
		$(".theme-switcher").find(".bi-sun").css("display", "none");

		document.body.style.setProperty("--main-background-color", "#383e45");
		document.body.style.setProperty("--primary-heading-color", "#ffffff");
		document.body.style.setProperty("--dynamic-text-color", "white");

		console.log("dark");
	}
}

function toggleTheme() {
	let ss_test = getStorage("ss_test", "local");

	if (ss_test.theme == "light") {
		ss_test.theme = "dark";
	} else if (ss_test.theme == "dark") {
		ss_test.theme = "light";
	}

	localStorage.setItem("ss_test", JSON.stringify(ss_test));
	updateTheme();
}

(function () {
	let ss_test = getStorage("ss_test", "local");

	if (!ss_test) {
		localStorage.setItem(
			"ss_test",
			JSON.stringify({
				theme: "light",
			})
		);
		ss_test = getStorage("ss_test", "local");
	}

	console.log("load");
	updateTheme();

	$(".theme-switcher").on("click", toggleTheme);
})();
