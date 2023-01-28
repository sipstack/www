//Aos animation + Countup on aos-init
const AOS = require('aos');
import { CountUp } from 'countup.js';

AOS.init({
  startEvent: 'load',
  duration: 750,
  delay: 50,
  once: true
});
function countIt(el) {
  const Num = el.dataset.to ? +el.dataset.to : null,
    n = el.dataset.countup ? JSON.parse(el.dataset.countup) : {};
  new CountUp(el, Num, n).start()
};
document.querySelectorAll("[data-countup]").forEach(el => { "countup:in" !== el.getAttribute("data-aos-id") && countIt(el) }),
  document.addEventListener("aos:in:countup:in", (function (el) {
    (
      el.detail instanceof Element ? [el.detail] : document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]')).forEach(el => { countIt(el) })
  }));

//Pricing countup
  const priceCountUp = document.querySelectorAll('[data-as-toggle="price"]');
  priceCountUp.forEach((el) => {
    el.addEventListener("change", (el) => {
      const t = el.target,
        n = t.checked,
        o = t.dataset.asTarget;
      document.querySelectorAll(o).forEach((el) => {
        const t = el.dataset.asAnnual,
          o = el.dataset.asMonthly,
          a = el.dataset.options ? JSON.parse(el.dataset.options) : {};
        (a.startVal = n ? t : o), (a.duration = a.duration ? a.duration : 1);
        (n ? new CountUp(el, o, a) : new CountUp(el, t, a)).start();
      });
    });
  });
  


  //ProgressBar animation
  document.querySelectorAll(".progress-bar").forEach(el => { "progress:in" !== el.getAttribute("data-aos-id") })
  document.addEventListener("aos:in:progress:in", (function (el) {
    ( el.detail instanceof Element ? [el.detail] : document.querySelectorAll('.aos-animate[data-aos-id="progress:in"]')).forEach(el => { 
      el.style.width= el.getAttribute(['aria-valuenow']) + '%';
      el.style.transitionDelay=".4s";
      el.style.transitionDuration=".8s";
    })
  }));