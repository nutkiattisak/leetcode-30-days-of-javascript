const map = function (arr, fn) {
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    temp[i] = fn(arr[i], i)
  }

  return temp
}
