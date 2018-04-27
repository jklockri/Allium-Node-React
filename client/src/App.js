import React, { Component } from 'react';
import Table from './components/table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      update: 0,
    };
  }

  fetchCards = () => {
    this.setState({ update: this.state.update + 1 });
  };

  render() {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    return (
      <div className="App">
        <Table key={this.state.update} suits={suits}/>
        <button onClick= {this.fetchCards}>Deal Again</button>
      </div>
    );
  }
}

export default App;
