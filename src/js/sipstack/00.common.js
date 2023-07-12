function setCookie(key, value, expiry = 30) {
  var expires = new Date()
  expires.setTime(expires.getTime() + expiry * 24 * 60 * 60 * 1000)
  // document.cookie = `${key}=${value};expires=${expires.toUTCString()};SameSite=None;secure;path=/;`;
  document.cookie = `${key}=${value};expires=${expires.toUTCString()};path=/;`
}

function getCookie(key) {
  var value = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)')
  if (value) {
    if (value[2][0] == '{' || value[2][0] == '[') {
      value[2] = JSON.parse(value[2])
    }
    return value[2]
  }
}

function eraseCookie(key) {
  let value = JSON.stringify(getCookie(key))
  setCookie(key, value, -1)
}

// get session OR local storage
function getStorage(key, type = 'session') {
  var value = ''
  switch (type) {
    case 'session':
      value = sessionStorage.getItem(key)
      break
    case 'local':
      value = localStorage.getItem(key)
      break
  }
  if (value) {
    if (value[0] == '{' || value[0] == '[') value = JSON.parse(value)
  }

  return value
}

// set session OR local storage
function setStorage(key, value, type = 'session') {
  if (typeof value === 'object') value = JSON.stringify(value)
  switch (type) {
    case 'session':
      sessionStorage.setItem(key, value)

      break
    case 'local':
      localStorage.setItem(key, value)
      break
  }
  return value
}

function getQueryParams() {
  return new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  })
}

function isPrivateIP(ip) {
  var parts = ip.split('.')
  return (
    parts[0] === '10' ||
    (parts[0] === '172' &&
      parseInt(parts[1], 10) >= 16 &&
      parseInt(parts[1], 10) <= 31) ||
    (parts[0] === '192' && parts[1] === '168') ||
    (parts[0] === '127' && parts[1] === '0' && parts[2] === '0')
  )
}

function parseJwt(token = getStorage('ss_token', 'local')) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

// standardized API request
function apiRequest(
  uri = '',
  method = 'GET',
  _data = [],
  dataType = 'JSON',
  async = true
) {
  if (uri == '') return false
  // if (window.location.host.split(":")[0] == "127.0.0.1" || window.location.host == "dev-whois.sipstack.com") {
  // 	uri = `${uri.split("?")[0]}.json`; // debug
  // }
  var url_base = `https://api.sipstack.com`
  // url_base = `http://192.168.1.30:3001`;
  return $.ajax({
    url: `${url_base}/v1/${uri}`,
    type: method,
    data: _data,
    dataType,
    async,
    crossDomain: true,
    xhrFields: {
      withCredentials: true,
    },
    headers: {
      // Authorization: "Bearer " + window.sessionStorage.getItem("ss_token"),
      // "X-HTTP-Method-Override": method.toUpperCase(),
      // "X-TA-SESSION": localStorage.session_id,
      // "X-TA-ACCOUNT": localStorage.account_id,
      // "X-TA-C": localStorage.c_id,
      // "X-TA-META": localStorage.meta,
    },
  })
}
