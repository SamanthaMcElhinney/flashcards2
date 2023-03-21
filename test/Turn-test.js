const chai = require("chai");
const expect = chai.expect;

const Turn = require("../src/Turn");
const Card = require("../src/Card");

describe("Turn", () => {
    let turn1, turn2, card1, card2

    beforeEach(() => {
        card1 = new Card(1, "What is Sam\'s favorite animal?", ["lion", "bear", "sloth"], "sloth");
        turn1 = new Turn('sloth', card1)
        card2 = new Card(2, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        turn2 = new Turn('pug', card2);
    })
    it("should be a function", () => {
        expect(Turn).to.be.a("function")
    })
    it("should hold be a new instance of Turn", () => {
        expect(turn1).to.be.an.instanceOf(Turn)
        expect(turn2).to.be.an.instanceOf(Turn)
    })
    it("should be have the players guess as an argument", () => {
        expect(turn1.guess).to.equal('sloth')
        expect(turn2.guess).to.equal('pug')
    })
    it("should take an instance of card as an argument", () => {
        expect(turn1.card).to.equal(card1)
        expect(turn2.card).to.equal(card2)
    })
    it("should have a method to return the players guess", () => {
        expect(turn1.returnGuess()).to.equal('sloth')
        expect(turn2.returnGuess()).to.equal("pug")
    })
    it("should have a method to return the card", () => {
        expect(turn2.returnCard()).to.deep.equal({
          cardId: 2,
          question: "What is Robbie's favorite animal",
          answers: ["sea otter", "pug", "capybara"],
          correctAnswer: "sea otter",
        });
        expect(turn1.returnCard()).to.equal(card1)
    })
    it("should have a method to evaluate if the guess is correct", () => {
        expect(turn1.evaluateGuess()).to.equal(true)
        expect(turn2.evaluateGuess()).to.equal(false)
    })
    it("should have a method to give feedback if the answer is correct and incorrect", () => {
        expect(turn1.giveFeedback()).to.equal("Correct!")
        expect(turn2.giveFeedback()).to.equal("Incorrect!")
    })
})
