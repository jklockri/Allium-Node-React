import React, { Component } from 'react';

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch('/api/cards')
    .then(res => res.json())
    .then((cards) => this.setState({ cards }, console.log(cards)));
  }

  render() {
    return (
      <div className="App">
        <h1>Something</h1>
        <h2></h2>
      </div>
    );
  }
}

export default Cards;
