import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import Searchform from './containers/Searchform'
import Header from './containers/Header'
import Trending from './containers/Trending'
import SeriesPage from './containers/SeriesPage'
import MoviesPage from './containers/MoviesPage'
import FavoritesPage from './containers/FavoritesPage'
import AboutPage from './containers/AboutPage'
import Search from './containers/Search'

class App extends Component {
  render() {
    return (
      <div className="App" >
        
        <Router>
          <div>
            <Header />
            <div style={{padding:'10px'}}>
              <Route path="/" exact component={Trending} />
              <Route path='/movies' component={MoviesPage}/>
              <Route path="/series" component={SeriesPage}/>
              <Route path="/favorites" component={FavoritesPage}/>
              <Route path="/search" component={Search}/>
              <Route path='/about' component={AboutPage}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
