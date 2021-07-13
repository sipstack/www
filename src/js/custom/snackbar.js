(function () {
	let ss_snackbar = JSON.parse(window.sessionStorage.getItem("ss_snackbar"));

	if (ss_snackbar) {
		$("body").append(`
            <div class="alert alert-${ss_snackbar.variant} alert-dismissible fade show snackbar" role="alert">
                ${ss_snackbar.message}
                <button type="button" class="close snackbar-close" data-dismiss="alert" aria-label="Close" style="margin-top: 5px">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `);
	}
	$(".snackbar-close").on("click", () => window.sessionStorage.removeItem("ss_snackbar"));
})();
