(function () {
    let content = [
        "We foster the global developer and entrepreneurial communities because they are the source of our ideas and innovation and essential to our sustained growth.", 
        "We make decisions that eliminate complexity and obstacles to our moving fast so we can enable our customers to focus on testing their Ideas, building their businesses and realizing their dreams.", 
        "We create an environment where we are transparent and respectful so we are confident in bringing our best selves on behalf of our customers and each other, every day.",
        "Earning trust every day is our core value proposition to our customers and to each other. We must be trustworthy, because the opportunity to serve our customers is larger than any one of us.",
        "Underlying everything we do, love for our customers and our DO is essential to realizing our fullest potential."
    ];

    $(".side-nav-btn").click(function() {
        $("#side-nav-text").fadeOut(0);

        $(".side-nav-btn").removeClass("active");
        $(this).addClass("active");
        $("#side-nav-text").text(content[$(this).data("key")]);

        $("#side-nav-text").fadeIn(300);
    });
})();