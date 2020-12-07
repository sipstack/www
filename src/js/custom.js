const applyLogoEffect = (scrollPos) => {
    $(window).on("scroll", () => {
        console.log($("html, body").scrollTop());
        if ($("html, body").scrollTop() > scrollPos) {
            $(".la-block-1, .la-block-7").addClass("la-block-trans-0");
            $(".la-block-2, .la-block-3, .la-block-6, .la-block-8").addClass("la-block-trans-n45");
            $(".la-block-4, .la-block-5").addClass("la-block-trans-45");
            $(".la-container").addClass("la-container-trans");
        }
    })
}