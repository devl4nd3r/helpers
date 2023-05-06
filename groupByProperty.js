function GroupBy(array, property) {
  return array.reduce((acc, obj) => {
    let key = obj[property]
    acc[key] = acc[key] || []
    acc[key].push(obj)
    return acc
  }, {})
}

const users = [
  { name: "Bytefer", age: 30 },
  { name: "Kakuqo", age: 28 },
  { name: "Chris", age: 28 },
]

const groupedUsers = GroupBy(users, "age")
// groupedUsers:
// {
//  '28': [ { name: 'Kakuqo', age: 28 }, { name: 'Chris', age: 28 } ],
//  '30': [ { name: 'Bytefer', age: 30 } ]
//  }
