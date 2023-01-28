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
