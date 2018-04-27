const express = require('express');
const { Deck, Player } =  require('playing-cards-js');
const app = express();
const port = 5000;

app.get('/api/cards', (req, res) => {
  let deck = new Deck;
  res.send(deck.cards);
});
app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
