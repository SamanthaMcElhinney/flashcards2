const Deck = require("./Deck")
const Turn = require("./Turn")

class Round{
    constructor(deck){
        this.deck = deck.cards
        this.currentCard = this.deck[0]
    }

    returnCurrentCard(){
         return this.currentCard
    }
}

module.exports = Round