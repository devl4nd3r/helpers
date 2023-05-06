// Opossite to Serialize: Parse into an Object
function ParseQueryString(queryString) {
  return queryString
    .replace(/(^\?)|(&$)/g, "")
    .split("&")
    .reduce((t, v) => {
      const [key, val] = v.split("=")
      t[key] = decodeURIComponent(val)
      return t
    }, {})
}

const queryParam = ParseQueryString("?name=Bytefer&email=bytefer%40gmail.com")
// queryParam: { name: 'Bytefer', email: 'bytefer@gmail.com' }
