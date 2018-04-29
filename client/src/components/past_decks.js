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
    return (
      <div>
        <h1>Historical Decks</h1>
        {this.state.safe ?
          this.state.decks.decks.map((deck, index) =>
          <div key={index} className="container">
            <table className='table'>
              <thead>
                <tr>
                  {this.props.tableHeaderArray.map((el, ind) =><th key={ind} scope="col">{el}</th>)}
                </tr>
              </thead>
              {this.props.suits.map((suit, i) =>
                 <TableRow
                   key={`${i} ${suit}`}
                   suit={suit}
                   cards={deck.cards.slice(i * 13, (i + 1) * 13)}/>
              )}
            </table>
              <Score key={`${index + 1000}`}
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
