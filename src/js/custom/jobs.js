(function () {
	let listingsPerPage = 5;
	let unfilteredJobs = $(".listing_tab .item");
	let filteredJobs = unfilteredJobs;

	// Limit listings shown per page
	function handleOverflow() {
		let key = $(".list_item_tab.active").attr("data-filter");

		// Filter listings based on tab
		if (key == "*") {
			filteredJobs = unfilteredJobs;
		} else {
			filteredJobs = $(unfilteredJobs).filter(`${key}`);
		}

		if (filteredJobs.length <= listingsPerPage) {
			$("nav.navigation.pagination .nav-links").empty();
			$(".nav-links").hide();
		} else {
			// Pagination
			let links = $("nav.navigation.pagination .nav-links");
			let i = listingsPerPage;
			let j = 2;

			links.append('<span aria-current="page" class="page-numbers current">1</span>');

			while (i < filteredJobs.length) {
				links.append(`<a class="page-numbers">${j}</a>`);
				i += listingsPerPage;
				j++;
			}

			$(".nav-links").show();

			$(".nav-links .page-numbers").on("click", function () {
				$(".nav-links .page-numbers").removeClass("current");
				$(this).addClass("current");
				pageChange();
			});
		}
	}

	function pageChange() {
		let pageNumber = parseInt($(".nav-links .page-numbers.current").text(), 10);

		$(unfilteredJobs).hide();

		for (let i = (pageNumber - 1) * listingsPerPage; i < (pageNumber - 1) * listingsPerPage + listingsPerPage; i++) {
			$(filteredJobs[i]).show();
		}
	}

	handleOverflow();

	// Set active filter
	$("#job_filter .list_item_tab").on("click", function () {
		$("#job_filter .list_item_tab").removeClass("active");
		$(this).addClass("active");
		handleOverflow();
	});

	// Store title, redirect to job application
	$(".apply_btn").on("click", function () {
		localStorage.setItem("position_title", $(this).closest(".job_list_table").find("h4").text());
	});
})();
