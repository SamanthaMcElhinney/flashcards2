const Turn = require("./Turn")

class Round {
    constructor(deck) {
        this.deck = deck.cards
        this.currentCard = this.deck[0]
        this.turns = 0
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard)
        this.turns++
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.currentCard = this.deck[this.turns]
        return turn.giveFeedback()
    }

    calculatePercentCorrect() {
        let wins = this.turns - this.incorrectGuesses.length
        let percent = parseInt(((wins / this.turns) * 100).toFixed(2));
        return percent;
    }

    endRound() {
        console.timeLog("✨Congrats! You played the game in")
        let message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
        console.log(message)
        return message
    }


}

module.exports = Round