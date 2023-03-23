const chai = require("chai");
const expect = chai.expect;

const Round = require("../src/Round")
const Card = require("../src/Card");
const Turn = require("../src/Turn")
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

    it("should have a property that tracks the number of turns taken and starts at 0", () => {
        expect(round.turns).to.equal(0)
    })

    it("should have a property of incorrect guesses to start out as an empty array", () => {
        expect(round.incorrectGuesses).to.deep.equal([])
    })

    it("should have a method that gives feedback for the guess given", () => {
        expect(round.takeTurn("sea otter")).to.equal('Correct!')
        expect(round.takeTurn("pug")).to.equal("Incorrect!")
    })

    it("should store the incorrect guesses", () => {
        round.takeTurn("pug")
        round.takeTurn("gallbladder");
        round.takeTurn("sea otter")
        expect(round.incorrectGuesses.length).to.equal(2)
    })

    it("should update the turn count each round", () => {
        round.takeTurn("sea otter")
        expect(round.turns).to.equal(1)
        round.takeTurn("gallbladder")
        expect(round.turns).to.equal(2)
        round.takeTurn("pug")
        expect(round.turns).to.equal(3)
    })
    it("should calculate the percentage correct", () => {
        round.takeTurn("sea otter");
        round.takeTurn("manatee");
        round.takeTurn("sea otter");
        expect(round.calculatePercentCorrect()).to.equal(33)
    })
    it("should have an end of round message that displays the percent correctly", () => {
        round.takeTurn("sea otter");
        round.calculatePercentCorrect()
        expect(round.endRound()).to.equal(`** Round over! ** You answered 100% of the questions correctly!`
        );
    })
})