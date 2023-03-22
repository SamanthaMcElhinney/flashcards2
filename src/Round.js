const Deck = require("./Deck")
const Turn = require("./Turn")

class Round {
    constructor(deck) {
        this.deck = deck.cards
        this.currentCard = this.deck[0]
        this.turns = 0
        this.time = Date.now()
        this.incorrectGuesses = []
    }

    returnCurrentCard() {
        return this.currentCard
    }

    takeTurn(guess) {
        let turn = new Turn(guess, this.currentCard)
        if (!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard.id)
        }
        this.turns++
        if(this.turns < this.deck.length) {
            this.currentCard = this.deck[this.turns]
        }
        return turn.giveFeedback()
    }

    calculatePercentCorrect() {
        let wins = this.turns - this.incorrectGuesses.length
        let percent = parseInt(((wins / this.turns) * 100).toFixed(2));
        return percent;
    }

    endRound() {
        // console.timeLog("You played the game in")
        return( `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }


}

module.exports = Round