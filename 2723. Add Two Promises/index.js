const addTwoPromises = async (promise1, promise2) => {
  return new Promise((resolve) => {
    promise1.then((value) => {
      promise2.then((value2) => {
        resolve(value + value2)
      })
    })
  })
}
