// make a hash object for each character
const convertArrayToObj = (passwordArr) => {
  const passwordObj = passwordArr.reduce((newObj, line) => {
    const [rule, chardirty, password] = line.split(" ")

    if (chardirty) {
      const char = chardirty.slice(0, -1)
      if (newObj[char]) {
        newObj[char].push({ password, rule })
      } else {
        newObj[char] = [{ password, rule }]
      }
    }
    return newObj
  }, {})
  return passwordObj
}

module.exports = convertArrayToObj
