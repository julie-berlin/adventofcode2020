const part1Validation = (term, obj) => {
  const regex = new RegExp(term, "g")
  const timesMatched = obj.password.match(regex)?.length
  const [atLeast, atMost] = obj.rule.split("-")
  if (timesMatched >= atLeast && timesMatched <= atMost) {
    return true
  }
  return false
}

const part2Validation = (term, obj) => {
  const charArray = obj.password.split("")
  const [position1, position2] = obj.rule.split("-")
  if (
    (charArray[position1 - 1] === term && charArray[position2 - 1] !== term) ||
    (charArray[position1 - 1] !== term && charArray[position2 - 1] === term)
  ) {
    return true
  }
  return false
}

const validatePasswords = (passwordObj, part) => {
  let valid = []
  for (let [key, pwArray] of Object.entries(passwordObj)) {
    const newbies = pwArray.filter((obj) =>
      part === 1 ? part1Validation(key, obj) : part2Validation(key, obj),
    )

    valid.push(...newbies)
  }
  return valid.length
}

module.exports = validatePasswords
