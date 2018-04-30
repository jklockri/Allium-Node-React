import React, { Component } from 'react';

class AvgScore extends Component {
  render() {
    return (
      <div className="container">
        <h1>Average Score</h1>
        <h1>{ this.props.totals.length > 0 ?
            (((this.props.totals.reduce((a, b) => a + b)
             / (104 * this.props.totals.length)) * 100)
             .toFixed(0))
            : null }</h1>
      </div>
    );
  }
}

export default AvgScore;
