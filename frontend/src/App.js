import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {BasicExample} from './components/Example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicExample/>
      </div>
    );
  }
}

export default App;
