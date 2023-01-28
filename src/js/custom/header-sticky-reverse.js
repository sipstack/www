let stickyReverse = document.querySelectorAll(".sticky-reverse");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
stickyReverse.forEach(function(el){
  window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        el.classList.remove(scrollUp);
        return;
      }
  
      if (currentScroll > lastScroll && !el.classList.contains(scrollDown)) {
        // down
        el.classList.remove(scrollUp);
        el.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && el.classList.contains(scrollDown)) {
        // up
        el.classList.remove(scrollDown);
        el.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
  });
})
