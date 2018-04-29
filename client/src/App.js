import React, { Component } from 'react';
import Table from './components/table';
import PastDecks from './components/past_decks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      update: 0,
      showPastDecks: false,
      showCurrentDeck: true,
    };
  }

  updateKey = () => {
    this.setState({ update: this.state.update + 1, showPastDecks: false, showCurrentDeck: true });
  };

  fetchPastDecks = () => {
    this.setState({ showPastDecks: true, showCurrentDeck: false });
  };

  render() {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const tableHeaderArray = ['Suit', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    return (
      <div className="container">

        <h1>Node Dealer </h1>
        {this.state.showCurrentDeck ?
        <Table key={this.state.update}
               suits={suits}
               tableHeaderArray = {tableHeaderArray} /> : null}

        <button type = "button"
                className = "btn btn-primary"
                onClick = {this.updateKey}>
                Deal Again</button>

        <button type = "button"
                className = "btn btn-success"
                onClick = {this.fetchPastDecks}>
                Historical Decks</button>

        {this.state.showPastDecks ?
          <PastDecks suits = {suits}
                     tableHeaderArray = {tableHeaderArray}/> : null}

      </div>
    );
  }
}

export default App;
