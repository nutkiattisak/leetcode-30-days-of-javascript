class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value
    this.isError = false
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      this.isError = true
    }
    this.result /= value
    return this
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result **= value
    return this
  }

  /**
   * @return {number}
   */
  getResult() {
    if (this.isError) {
      return "Division by zero is not allowed"
    }

    return this.result
  }
}
