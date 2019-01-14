import React, { Component } from 'react';
import axios from 'axios'

class Searchform extends Component {
  render() {
    return (
      <div>
        <aside>
            <form action="">
                <input type="search" name="searchInput" class="searchInput" placeholder="Movies, series"/>
                <button type="button" class="search_button">Search movies</button><br/>
                <input type="radio" name="type" value="movie" class="rb" checked/>Movie<br/>
                <input type="radio" name="type" value="series" class="rb"/>TV Series<br/>
            </form>
        </aside>
      </div>
      
    );
  }
}

export default Searchform;
