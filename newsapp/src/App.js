import './App.css';

// Modifying App.js for class based component
// use "rcc" to getclass based component
// this.props -->props, this.state -->state
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        <NewsItem/>
      </div>
    )
  }
}

// =export default App;
