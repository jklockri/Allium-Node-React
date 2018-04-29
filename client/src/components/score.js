import React, { Component } from 'react';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      decks: [],
      safe: false,
    };
    this.total = 0;
  }

  render() {
    return (
      <div className="container">
        {this.props.suits.map((suit, i) => {
          this.props.cards.slice(i * 13, (i + 1) * 13).map((card, index) => {
            if (card.suit === suit) {
              this.total++;
            }

            if (card.name === (index + 1).toString()) {
              this.total++;
            } else if (index === 10 && card.name === 'J') {
              this.total++;
            } else if (index === 11 && card.name === 'Q') {
              this.total++;
            } else if (index === 12 && card.name === 'K') {
              this.total++;
            }
          });
        })}
        <h1>Total</h1>
        {this.props.triggerUpdate(this.total)}
        <h1>{((this.total / 104) * 100).toFixed(0)}%</h1>

      </div>
    );
  }
}

export default Score;
