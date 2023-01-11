//BackToTop
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add("show");
    }
    if (scrolled < coords) {
        goTopBtn.classList.remove("show");
    }
}
var goTopBtn = document.querySelector(".toTop");
if(goTopBtn){
    window.addEventListener("scroll", trackScroll);
}

