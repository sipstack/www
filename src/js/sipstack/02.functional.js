// cookie

function fn_cookie() {
  console.log(getCookie('ss_cookie'))
  if (!getCookie('ss_cookie')) {
    var url = window.location.pathname
    if (url != '/legal/cookie/') {
      $('#ss-cookie').toggleClass('show')
    }
  }

  $('#ss-cookie-accept').on('click', () => {
    setCookie('ss_cookie', Date.now(), '180')
  })
}
