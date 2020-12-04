/**
 *
 * Part 1
 * Find first two entries in an array of numbers that adds to a given
 * total (2020) and return the product of those.
 *
 */

const productOf2Summands = (arrayOfNumbers, sumTo) => {
  let result = null

  for (let value of arrayOfNumbers) {
    const counterpart = sumTo - value
    if (arrayOfNumbers.indexOf(counterpart) > -1) {
      result = counterpart * value
      break
    }
  }

  return result
}

module.exports = productOf2Summands
