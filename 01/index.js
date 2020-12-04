const fs = require("fs")
const productOf2Summands = require("./part1")
const productOf3Summands = require("./part2")

/**
 * Day 1
 * Given a list of numbers and a sum value, return the product that sums to that value
 */

try {
  // read in data
  const data = fs.readFileSync("./01/input.txt", "UTF-8")
  const lines = data.split(/\r?\n/)

  // setup
  const inputArray = lines.map((line) => parseInt(line.trim(), 10))

  // answers
  console.log("Part 1:", productOf2Summands(inputArray, 2020))
  console.log("Part 2:", productOf3Summands(inputArray, 2020))
} catch (err) {
  console.error(err)
}
