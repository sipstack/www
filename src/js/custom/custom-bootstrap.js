window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl)
})
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

//collapse for sidebar
document.querySelectorAll(".collapse-group .collapse").forEach((e => {
  const t = new bootstrap.Collapse(e, { toggle: !1 });
  e.addEventListener("show.bs.collapse", (a => {
    a.stopPropagation();
    e.parentElement.closest(".collapse").querySelectorAll(".collapse").forEach((e => {
      const a = bootstrap.Collapse.getInstance(e);
      a !== t && a.hide()
    }))
  })), e.addEventListener("hide.bs.collapse", (t => {
    t.stopPropagation();
    e.querySelectorAll(".collapse").forEach((e => { bootstrap.Collapse.getInstance(e).hide() }))
  }))
}));
