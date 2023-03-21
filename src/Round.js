const Deck = require("./Deck")
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

    takeTurn(guess){
        let turn = new Turn(guess, this.currentCard)
        turn.evaluateGuess()
        this.turns ++
        if(!turn.evaluateGuess()) {
            this.incorrectGuesses.push(this.currentCard)
        }
    }
}

module.exports = Round