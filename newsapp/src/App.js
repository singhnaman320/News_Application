import './App.css';

// Modifying App.js for class based component
// use "rcc" to getclass based component
// this.props -->props, this.state -->state
import React, { Component } from 'react'
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}

// =export default App;
