import isotopeLayout from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
// init Isotope
let iso = document.querySelectorAll('[data-isotope]');
let filtersElem = document.querySelectorAll('[data-filter]');
filtersElem.forEach((function (e) {
    e.addEventListener("click",
    (function (t) {
            t.preventDefault();
            let filterValue = e.dataset.filter;
            iso.arrange({ filter: filterValue });
        }))
})),
iso.forEach(el=> {
    imagesLoaded(el,function(){
        iso = new isotopeLayout(el);
       });
});