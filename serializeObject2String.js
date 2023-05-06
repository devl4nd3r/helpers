function StringifyObject(queryParam = {}) {
  return Object.entries(queryParam)
    .reduce(
      (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
      Object.keys(queryParam).length ? "?" : ""
    )
    .replace(/&$/, "")
}

const queryString = StringifyObject({
  name: "misterj",
  email: "misterjmailexample@gmail.com",
})
// queryString: '?name=misterj&email=misterjmailexample%40gmail.com'
