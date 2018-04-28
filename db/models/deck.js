const mongoose = require('mongoose');

var Deckdb = mongoose.model('Deck', {
  cards: [],
});

module.exports = { Deckdb };
