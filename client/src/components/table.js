import React, { Component } from 'react';
import TableRow from './table_row';
import Score from './score';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    fetch('/api/cards/')
    .then((res) => res.json())
    .then((cards) => this.setState({ cards }))
    .then(() => console.log(this.state.cards))
    .then(() => fetch('/api/cards/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cards: this.state.cards,
      }),
    }));
  }

  render() {
    const tableHeaderArray = ['Suit', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    return (
      <div className="container">
        <table className='table'>
          <thead>
            <tr>
              {tableHeaderArray.map((el, i) => <th key={i} scope="col">{el}</th>)}
            </tr>
          </thead>
          {this.props.suits.map((suit, i) =>
             <TableRow
               key={i}
               suit={suit}
               cards={this.state.cards.slice(i * 13, (i + 1) * 13)}/>
          )}
        </table>
        <Score cards ={this.state.cards} suits={this.props.suits}/>
      </div>
    );
  }
}

export default Table;
