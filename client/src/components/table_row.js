import React, { Component } from 'react';
import Emoji from 'react-emoji-render';

class TableRow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <th scope='row'>{this.props.suit}</th>
            {this.props.cards.map((card, index) => {

              if (card.suit.charAt(0) === 'S') {
                return <td key={index}>{card.name}<Emoji text="♠️" /> </td>;
              } else if (card.suit.charAt(0) === 'H') {
                return <td key={index}>{card.name}<Emoji text="♥️" /> </td>;
              } else if (card.suit.charAt(0) === 'D') {
                return <td key={index}>{card.name}<Emoji text="♦️" /> </td>;
              } else if (card.suit.charAt(0) === 'C') {
                return <td key={index}>{card.name}<Emoji text="♣️" /> </td>;
              }
            }
          )}
        </tr>
      </tbody>
    );
  }
}

export default TableRow;
