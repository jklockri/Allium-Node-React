import React, { Component } from 'react';
import Table from './components/table';

class App extends Component {
  render() {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    return (
      <div className="App">
        <Table suits={suits}/>
      </div>
    );
  }
}

export default App;
