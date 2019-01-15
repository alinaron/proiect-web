import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from "react-router-dom";
import MoviesMore from '../components/MoviesMore'
import { Link } from "react-router-dom";

class Searchform extends Component {
  render() {
    return (
      <div>
            <form action="">
                <input type="search" name="searchInput" class="searchInput" placeholder="Movies, series"/>
                <button type="button" class="search_button">Search movies</button><br/>
            </form>
      </div>
    );
  }
}

export default Searchform;
