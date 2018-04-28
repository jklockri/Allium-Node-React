const express = require('express');
const { mongoose } = require('./db/mongoose');
const { Deckdb } = require('./db/models/deck');
const { Deck, Player } =  require('playing-cards-js');
const app = express();
const port = 5000;

app.get('/api/cards', (req, res) => {
  let deck = new Deck;
  let shuffledDeck = deck.shuffle();
  res.send(shuffledDeck);
});

app.post('/api/cards/', (req, res) => {
  var deck = new Deckdb({
    cards: req.body.cards,
    total: req.body.total,
  });
  deck.save();
});

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
