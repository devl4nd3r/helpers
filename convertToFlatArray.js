function FlatArray(arr = []) {
  return arr.reduce(
    (accumulator, currentValue) =>
      accumulator.concat(
        Array.isArray(currentValue) ? FlatArray(currentValue) : currentValue
      ),
    []
  )
}

const arr1 = FlatArray([
  [1, [1, 2]],
  [3, [3, [5]]],
])
// arr1: [ 1, 1, 2, 3, 3, 5 ]
