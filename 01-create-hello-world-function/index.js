const createHelloWorld = () => {
  return function (...args) {
    if (args.lenght < 0 && args.length > 20) return;

    return "Hello World"
  }
}