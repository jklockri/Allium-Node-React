import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="container">
        <h1>How to play</h1>
        <h5>By clicking the "Deal Again" button cards will randomly be generated then shown in a table.</h5>
        <h5>The total is the number of points you earned for that board.</h5>
        <h5>The "Average Score" is the average from the previous games played.</h5>
        <h5>You get points from:</h5>
        <ul>
          <li><h5> The suit being in the correct row</h5></li>
          <li><h5>or</h5></li>
          <li><h5> The value being in the correct column</h5></li>
        </ul>
        <hr></hr>
        <h2>Check out the source code </h2>
        <a href="https://github.com/jklockri/Allium-Node-React"><h5>Here</h5></a>
      </div>
    );
  }
}

export default Instructions;
