const fs = require("fs")
const convertArrayToObj = require("./helpers")
const validatePasswords = require("./validate")

/**
 * Day 2
 * Given a list of rules, characters, and passwords,
 * return the number of valid passwords based on provided
 * validation rule
 */

try {
  // read in data
  const data = fs.readFileSync("./02/input.txt", "UTF-8")
  const lines = data.split(/\r?\n/)

  // setup
  const converted = convertArrayToObj(lines)

  // answers
  console.log("Part 1:", validatePasswords(converted, 1))
  console.log("Part 2:", validatePasswords(converted, 2))
} catch (err) {
  console.error(err)
}
