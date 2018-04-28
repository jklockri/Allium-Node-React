import React, { Component } from 'react';
import Table from './components/table';
import PastDecks from './components/past_decks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      update: 0,
      showPastDecks: false,
    };
  }

  updateKey = () => {
    this.setState({ update: this.state.update + 1, showPastDecks: false });

  };

  fetchPastDecks = () => {
    this.setState({ showPastDecks: true });
  };

  render() {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    return (
      <div className="App">
        <Table key={this.state.update} suits={suits}/>
        <button onClick = {this.updateKey}>Deal Again</button>
        <button onClick = {this.fetchPastDecks}>fetch past decks</button>
        {this.state.showPastDecks ?
          <PastDecks suits= {suits} /> : null}

      </div>
    );
  }
}

export default App;
