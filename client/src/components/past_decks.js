import React, { Component } from 'react';
import TableRow from './table_row';
import Score from './score';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      decks: [],
      safe: false,
    };
    this.total = 0;
  }

  componentDidMount() {
    fetch('/api/decks/')
    .then((res) => res.json())
    .then((decks) => this.setState({ decks, safe: true }));
  }

  updateTotal= (total) => {
    this.total = total;
  };

  render() {
    console.log(this.state.decks);
    const tableHeaderArray = ['Suit', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    return (
      <div className="container">
        {this.state.safe ?
          this.state.decks.decks.map((deck, index) =>
          <div className="container">
            <table className='table'>
              <thead>
                <tr>
                  {tableHeaderArray.map((el, index) => <th key={index} scope="col">{el}</th>)}
                </tr>
              </thead>
              {this.props.suits.map((suit, i) =>
                 <TableRow
                   key={`${i} ${suit}`}
                   suit={suit}
                   cards={deck.cards.slice(i * 13, (i + 1) * 13)}/>
              )}
            </table>
              <Score key={`${index}`}
                     totals = {this.state.decks}
                     cards={deck.cards}
                     suits={this.props.suits}
                     triggerUpdate={this.updateTotal} />

          </div>)
           : null }

      </div>
    );
  }
}

export default Table;
