import React, { Component } from 'react';

import './App.css';
import Flexview from './containers/Flexview'
import Searchform from './containers/Searchform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Your movie manager</h1>
        </header>
        <Flexview/>
        <Searchform/>
      </div>
    );
  }
}

export default App;
