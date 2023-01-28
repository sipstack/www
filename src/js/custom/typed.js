const Typed = require('typed.js');
var initTyped = document.querySelectorAll("[data-typed]");
initTyped.forEach(eType => {
  const tType = {
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2e3, loop: !0,
    ...eType.dataset.typed ? JSON.parse(eType.dataset.typed) : {}
  };
  new Typed(eType, tType)
});