function Uniq(arr = []) {
  return arr.reduce(
    (accumulator, currentValue) =>
      accumulator.includes(currentValue)
        ? accumulator
        : [...accumulator, currentValue],
    []
  )
}

const arr2 = Uniq([1, 1, 2, 3, 3, 5])
// arr2: [ 1, 2, 3, 5 ]

// Optional to implement array deduplication
// const arr2 = [...new Set([1, 1, 2, 3, 3, 5 ])]
// arr2: [ 1, 2, 3, 5 ]
