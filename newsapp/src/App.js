import './App.css';

// Modifying App.js for class based component
// use "rcc" to getclass based component
// this.props -->props, this.state -->state
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Switch, // To get Switch install react route dom version below 6.0.0 --> "npm install react-router-dom@5.2.0"
  Route
}from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            
            <Route path='/'> {/* will reach to home */}
              <News pageSize={8} country="in" category="general"/> {/* All categories you can see from News API */}
            </Route>
            <Route path='/business'>
              <News pageSize={8} country="in" category="business"/>
            </Route>
            <Route path='/entertainment'>
              <News pageSize={8} country="in" category="entertainment"/>
            </Route>
            <Route path='/general'>
              <News pageSize={8} country="in" category="general"/>
            </Route>
            <Route path='/health'>
              <News pageSize={8} country="in" category="health"/>
            </Route>
            <Route path='/science'>
              <News pageSize={8} country="in" category="science"/>
            </Route>
            <Route path='/sports'>
              <News pageSize={8} country="in" category="sports"/>
            </Route>
            <Route path='/technology'>
              <News pageSize={8} country="in" category="technology"/>
            </Route>
            
          </Switch>
        </Router>
      </div>
    )
  }
}

// export default App;

// we will use News API : https://newsapi.org/docs/get-started for this application
// I used sampleOutput.json and I will pate our data and use it to show news 
