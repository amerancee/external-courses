"use strict"
const Calculator = {
  state: 0,
  add(value) {
    if (value) {
      Calculator.state += value;
    }
    return Calculator.add;
  },
  subtract(value) {
    if (value) {
      Calculator.state -= value;
    }
    return Calculator.subtract;
  },
  divide(value) {
    if (value) {
      Calculator.state /= value;
    }
    return Calculator.divide;
  },
  multiply(value) {
    if (value) {
      Calculator.state *= value;
    }
    return Calculator.multiply;
  },
  getResult() {
    return Calculator.state;
  },
  reset() {
    Calculator.state = 0;
    return Calculator.state;
  }
}

module.exports = Calculator