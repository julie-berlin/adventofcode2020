/**
 *
 * Part 2
 * Find first three entries in an array of numbers that adds to a given
 * total (2020) and return the product of those.
 *
 */

const productOf3Summands = (arr, sumTo) => {
  let result = null

  for (let i of arr) {
    const counterpart1 = sumTo - i
    for (let j of arr) {
      const counterpart2 = counterpart1 - j
      if (arr.indexOf(counterpart2) > -1) {
        return counterpart2 * i * j
      }
    }
  }

  return result
}

module.exports = productOf3Summands
