"use strict"

class Hangman {
    constructor(word) {
        this.word = word.toLowerCase().split("");
        this.errorsLeft = 6;
        this.wrongSymbols = [];
        this.guessedString = [];

        for (let i = 0; i < this.word.length; i++) {
            this.guessedString.push("_");
        }
    }

    getGuessedString() {
        return this.guessedString.join("");
    }

    getErrorsLeft() {
        return this.errorsLeft;
    }

    getWrongSymbols() {
        return this.wrongSymbols;
    }

    getStatus() {
        return this.guessedString.join("") + " | errors left " + this.errorsLeft;
    }

    startAgain(word) {
        return new this.constructor(word);
    }

    guess(letter) {
        if (typeof (letter) === "string") {
            // eslint-disable-next-line no-param-reassign
            letter = letter.slice(0, 1); //Учитываем только первый введенный символ. Без команды выше - линт ругается.
        } else {
            console.log("You need to type string symbols | errors left " + this.getErrorsLeft());
            return this;
        }

        let letterPosition = this.word.indexOf(letter);
        let index = 0;

        if (letterPosition === -1) {
            if (this.wrongSymbols.indexOf(letter) === -1) {
                this.wrongSymbols.push(letter);
            }

            console.log("wrong letter, errors left " + this.getErrorsLeft() + " | " + this.getWrongSymbols().join(","));
            this.errorsLeft -= 1;

            if (this.errorsLeft < 0) {
                console.log("You lose. Try again with startAgain('word')");
            }
            return this;
        }

        this.guessedString.splice(letterPosition, 1, letter);
        index = letterPosition + 1;

        while (index < this.word.length) {
            index = this.word.indexOf(letter, index);
            if (index > 0) {
                this.guessedString.splice(index, 1, letter);
                index++;
            } else {
                break;
            }
        }

        if (this.guessedString.indexOf("_") === -1) {
            console.log(this.getGuessedString() + " | You won!");
        } else {
            console.log(this.getGuessedString());
        }
        return this;
    }
}

module.exports = new Hangman("webpurple");