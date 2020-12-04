const validatePasswords = require("./validate")

describe("Day 2", () => {
  const passwordExample = {
    a: [{ password: "abcde", rule: "1-3" }],
    b: [{ password: "cdefg", rule: "1-3" }],
    c: [{ password: "ccccccccc", rule: "2-9" }],
  }

  beforeAll(() => {
    console.log("Day 2 Tests")
  })

  describe("Part 1", () => {
    it("should return 2 (true, false, true)", () => {
      expect(validatePasswords(passwordExample, 1)).toBe(2)
    })
  })

  describe("Part 2", () => {
    it("should return 1 (true, false, false)", () => {
      expect(validatePasswords(passwordExample, 2)).toBe(1)
    })
  })
})
