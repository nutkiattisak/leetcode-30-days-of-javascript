const createCounter = (init) => {
  let tempInit = init
  return {
    increment() {
      return (tempInit += 1);
    },
    decrement() {
      return (tempInit -= 1);
    },
    reset() {
      tempInit = init;
      return tempInit;
    },
  }
}
