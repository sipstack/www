(function () {
	let ss_cs_items = {
		cookie: {
			id: "basic",
			description: "Standard Cookie Consent",
			date: "",
			accepted: "false",
		},
	};
	//Store on first visit
	if (!localStorage.getItem("ss_cs")) {
		localStorage.setItem("ss_cs", JSON.stringify(ss_cs_items));
	}
})();
