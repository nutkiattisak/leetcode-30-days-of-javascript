const chunk = (arr, size) => {
  let res = []
  for (let index = 0; index < arr.length; index += size) {
    res.push(arr.slice(index, index + size))
  }
  return res
}
