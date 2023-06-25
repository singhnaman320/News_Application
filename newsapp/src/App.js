import './App.css';

// Modifying App.js for class based component
// use "rcc" to getclass based component
// this.props -->props, this.state -->state
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        Hello my first class based component
      </div>
    )
  }
}

// =export default App;
