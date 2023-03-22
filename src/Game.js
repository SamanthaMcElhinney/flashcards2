const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require("./Deck");
const Round = require("./Round")
const Card = require("./Card")

class Game {
  constructor() {
    this.currentRound;
    this.deck;
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
    -----------------------------------------------------------------------`)
  }
  
  printQuestion(round) {
    util.main(round);
  }

  createCards(){
    let cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });
    return cards
  }

  createDeck(){
   this.deck = new Deck(this.createCards())
   return this.deck
  }

  createRound(){
    this.currentRound = new Round(this.createDeck())
    return this.currentRound
  }

  start(){
    this.printMessage(this.createDeck(), this.createRound)
    this.printQuestion(this.createRound())
  }
  

}

module.exports = Game;