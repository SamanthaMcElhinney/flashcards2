const chai = require("chai");
const expect = chai.expect;

const Game = require("../src/Game");

describe("Game", () => {
    let game;

    beforeEach(() => {
        game = new Game()
    })

    it("should be a function", () => {
        expect(Game).to.be.a("function")
    })
    it("should be an instance of game", () => {
        expect(game).to.be.an.instanceOf(Game)
    })
    it("should be able to create cards", () => {
        game.createCards()
        expect(game.createCards().length).to.equal(30)
    })
    it("should create a new deck", () => {
        expect(game.createDeck()).to.be.an("object")
        expect(
            game.createDeck().cards.find((card) => card.id === 2)
        ).to.deep.equal({
            id: 2,
            question: "What is a comma-separated list of related values?",
            answers: ["array", "object", "function"],
            correctAnswer: "array",
        });
    })
    it("should make a new game", () => {
        expect(game.createRound().deck.find(card => card.id === 6)).to.deep.equal({
            "id": 6,
            "question": "What is an example of a mutator method?",
            "answers": ["sort()", "map()", "join()"],
            "correctAnswer": "sort()"
        })
    })
})