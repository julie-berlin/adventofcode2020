const productOf2Summands = require("./part1")
const productOf3Summands = require("./part2")

describe("Day 1", () => {
  describe("Part 1", () => {
    it("should return 514579 when for part 1", () => {
      const inputArray = [1721, 979, 366, 299, 675, 1456]
      expect(productOf2Summands(inputArray, 2020)).toBe(514579)
    })
  })

  describe("Part 2", () => {
    it("should return 241861950 for part 2", () => {
      const inputArray = [1721, 979, 366, 299, 675, 1456]
      expect(productOf3Summands(inputArray, 2020)).toBe(241861950)
    })
  })
})
