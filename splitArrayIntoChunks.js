function Chunk(array, size) {
  return array.reduce((acc, _, index) => {
    if (index % size === 0) acc.push(array.slice(index, index + size))
    return acc
  }, [])
}

const numbers = [1, 2, 3, 4, 5, 6, 7]
const arr3 = Chunk(numbers, 2)
// arr3: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]
