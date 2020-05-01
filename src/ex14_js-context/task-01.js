"use strict"

class Calculator {
    constructor(state = 0) {
        this.state = state;
    }

    add(value) {
        if (value) {
            this.state += value;
        }
        return this;
    }

    subtract(value) {
        if (value) {
            this.state -= value;
        }
        return this;
    }

    divide(value) {
        if (value) {
            this.state /= value;
        }
        return this;
    }

    multiply(value) {
        if (value) {
            this.state *= value;
        }
        return this;
    }

    getResult() {
        return this.state;
    }

    setState(value) {
        if (value) {
            this.state = value;
        }
        return this;
    }

    reset() {
        this.state = 0;
        return this;
    }

    fetchData(callback) {
        let value = 500;

        setTimeout(() => {
            if (callback(value)) {
                this.state = value;
            }
        }, 0);

        return this;
    }
}

module.exports = new Calculator(0);