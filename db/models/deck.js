const mongoose = require('mongoose');

var DeckSchema = mongoose.Schema({
  cards: [],
  total: {
    type: Number,
  },
});

var Deckdb = mongoose.model('Deck', DeckSchema);

module.exports = { Deckdb };
