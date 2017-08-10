import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainComponent from './components/MainComponent';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
      
    return (
      <div className="App">
        <MainComponent />
      </div>
    );
  }
}

export default App;
