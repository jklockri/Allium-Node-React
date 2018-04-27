import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
      <tbody>
        <tr>
          <th scope='row'>{this.props.suit}</th>
            {this.props.cards.map((card, index) =>
              <td key={index}>{card.name} {card.suit.charAt(0)}</td>
            )}
        </tr>
      </tbody>
    );
  }
}

export default TableRow;
