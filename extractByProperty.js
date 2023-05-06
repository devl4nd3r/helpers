function ExtractValue(arr, property) {
  return arr.reduce(function (acc, object) {
    if (property in object) acc.push(object[property])
    return acc
  }, [])
}

const users = [
  { name: "Bytefer", age: 30 },
  { name: "Kakuqo", age: 28 },
  { name: "Chris", age: 28 },
]
const names = ExtractValue(users, "name")
// names: [ 'Bytefer', 'Kakuqo', 'Chris' ]
