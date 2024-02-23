const reduce = (nums, fn, init) => {
  if (nums.length === 0) return init

  return nums.reduce((accum, curr) => fn(accum, curr), init);
}
