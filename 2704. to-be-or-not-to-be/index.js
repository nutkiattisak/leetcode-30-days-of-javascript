const expect = (val) => {
  return {
    toBe(valToBe) {
      if (val !== valToBe) {
        throw "Not Equal"
      }
      return true
    },
    notToBe(valNotToBe) {
      if (val === valNotToBe) {
        throw "Equal"
      }
      return true
    },
  }
}
