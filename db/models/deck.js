const mongoose = require('mongoose');

var Deckdb = mongoose.model('Deck', {
  cards: [],
  total: {
    type: Number,
  },
});

module.exports = { Deckdb };
