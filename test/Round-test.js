const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round")
const Card = require("../src/Card");
// const Turn = require("../src/Turn")
const Deck = require("../src/Deck")

describe("Round", () => {
    let round, deck, card1, card2, card3

    beforeEach(() => {
        card1 = new Card(
          1,
          "What is Robbie's favorite animal",
          ["sea otter", "pug", "capybara"],
          "sea otter"
        );
        card2 = new Card(
          14,
          "What organ is Khalid missing?",
          ["spleen", "appendix", "gallbladder"],
          "gallbladder"
        );
        card3 = new Card(
          12,
          "What is Travis's middle name?",
          ["Lex", "William", "Fitzgerald"],
          "Fitzgerald"
        );

        deck = new Deck([card1, card2, card3]);
        round = new Round(deck)
    })

    it("should be a function", () => {
        expect(Round).to.be.a("function")
    })
    it("should be an instance of Round", () => {
        expect(round).to.be.an.instanceOf(Round)
    })
    it("should have a deck property that takes in a deck of cards", () => {
        expect(round.deck).to.deep.equal([card1, card2, card3]);
    })
    it("should have a method that always returns the current card being played", () => {
        expect(round.returnCurrentCard()).to.deep.equal(card1)
    })
})