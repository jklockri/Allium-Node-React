require('./config');
const express = require('express');
const path = require('path');
const { mongoose } = require('./db/mongoose');
const { Deckdb } = require('./db/models/deck');
const { Deck } =  require('playing-cards-js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT;
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/cards', (req, res) => {
  let deck = new Deck;
  let shuffledDeck = deck.shuffle();
  Deckdb.find()
    .then((decks) => decks.map(cards => cards.total))
      .then((totals) => res.send({ shuffledDeck, totals }));
});

app.post('/api/cards/', (req, res) => {
  var deck = new Deckdb({
    cards: req.body.cards,
    total: req.body.total,
  });

  deck.save()
  .then((deck) => res.send(deck),
  (e) => res.status(400).send(e));
});

app.get('/api/decks/', (req, res) => {
  Deckdb.find().then((decks) => res.send({ decks }));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});

module.exports = { app };
