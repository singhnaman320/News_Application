import './App.css';

// Modifying App.js for class based component
// use "rcc" to getclass based component
// this.props -->props, this.state -->state
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5}/>
      </div>
    )
  }
}

// export default App;

// we will use News API : https://newsapi.org/docs/get-started for this application
// I used sampleOutput.json and I will pate our data and use it to show news 
