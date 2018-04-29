const expect = require('expect');
const request = require('supertest');
const { ObjectID } = require('mongodb');

const { app } = require('../server');
const { Deckdb } = require('../db/models/deck');
const { Deck } =  require('playing-cards-js');

let deck = new Deck;
deck = deck.shuffle();
const decks = [{
  _id: new ObjectID,
  cards: deck,
  total: 15,
}, {
  _id: new ObjectID,
  cards: deck,
  total: 12,
},
];

beforeEach((done) => {
  Deckdb.remove({}).then(() => Deckdb.insertMany(decks))
    .then(() => done());
});

describe('GET', () => {
  describe('/api/cards', () => {
    it('should return 52 cards and all of the past totals', (done) => {
      request(app)
      .get('/api/cards')
      .expect(200)
      .expect((res) => {
        expect(res.body.shuffledDeck.length).toBe(52);
        expect(res.body.totals.length).toBe(2);
      })
    .end(done);
    });
  });

  describe('/api/decks', () => {
    it('should return all of the past decks', (done) => {
      request(app)
      .get('/api/decks')
      .expect(200)
      .expect((res) => {
        expect(res.body.decks.length).toBe(2);
      })
    .end(done);
    });
  });
});

describe('POST', () => {
  describe('/api/cards', () => {
    it('should create a new deck', (done) => {
      let deck = new Deck;
      deck = deck.shuffle();

      request(app)
      .post('/api/cards')
      .send({ cards: deck })
      .expect(200)
      .expect((r) => {
        expect(r.body.cards).toEqual(deck);
      })
      .end((e, r) => {
        if (e) {
          return done(e);
        }

        Deckdb.find({ cards: deck }).then((decks) => {
          expect(decks.length).toBe(1);
          expect(decks).toBe(decks);
          done();
        }).catch((e) => done(e));
      });
    });
  });
});
