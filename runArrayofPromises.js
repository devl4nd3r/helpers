const runPromisesInSeries = (ps, initialValue) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve(initialValue))

// Demo Promise1
const fetchUserData = (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetchUserData")
      resolve({ name: username })
    }, 500)
  })
}

// Demo Promise2
const renderUserInfo = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("renderUserInfo")
      resolve(`<h1>${user.name}</h1>`)
    }, 500)
  })
}

// Demo Promise3
const outputUserInfo = (html) => {
  return new Promise((resolve) => {
    console.log("outputUserInfo")
    resolve({ status: "success", content: html })
  })
}

const pSeries = runPromisesInSeries(
  [fetchUserData, renderUserInfo, outputUserInfo],
  "Bytefer"
)

pSeries.then(console.log)
