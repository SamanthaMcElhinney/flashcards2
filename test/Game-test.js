const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Deck = require("../src/Deck")

const Round = require("../src/Round")
const Game = require("../src/Game");

describe("Game", () => {
    let game, round, deck, card1, card2, card3

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
        game = new Game()
    })

    it("should be a function", () => {
        expect(Game).to.be.a("function")
    })
    it("should be an instance of game", () => {
        expect(game).to.be.an.instanceOf(Game)
    })
    it("should create new instances of card", () => {
        game.createCards()
        expect(card1).to.be.an.instanceOf(Card);
    });

    it("should be able to create cards", () => {
        game.createCards()
        expect(game.createCards().length).to.equal(30)
    })
    it("should create a new instance of deck with the cards", () => {
        game.createDeck()
        expect(game.deck).to.be.an.instanceOf(Deck)
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