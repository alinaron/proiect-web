import React, { Component } from 'react';
import axios from 'axios'
import List from '@material-ui/core/List';
import MoviesMore from '../components/MoviesMore'
import Button from '@material-ui/core/Button';
import SeriesMore from '../components/SeriesMore'

const API_URL_FIRST_MOVIES = 'https://api.themoviedb.org/3/search/movie?api_key=9d4e4d893f92db6be6b49b2e3961e6de&language=en-US&query='
const API_URL_SECOND_MOVIES ='&page=1&include_adult=false'

const API_URL_FIRST_SERIES = 'https://api.themoviedb.org/3/search/tv?api_key=9d4e4d893f92db6be6b49b2e3961e6de&language=en-US&query='
const API_URL_SECOND_SERIES = '&page=1'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList : [],
            seriesList : []
        }
        this.addToContainerMovies = this.addToContainerMovies.bind(this)
        this.addToContainerSeries = this.addToContainerSeries.bind(this)
    }
    
    addToContainerMovies(event) {
        event.preventDefault()
        let input = document.getElementById('searchInput');
        let queryString = input.value;
        axios.get(API_URL_FIRST_MOVIES + queryString + API_URL_SECOND_MOVIES).then((result) => {
            this.setState({moviesList: result.data.results})
        })
    }
    
    addToContainerSeries(event) {
        event.preventDefault()
        let input = document.getElementById('searchInput');
        let queryString = input.value;
        axios.get(API_URL_FIRST_SERIES + queryString + API_URL_SECOND_SERIES).then((result) => {
            this.setState({seriesList: result.data.results})
        })
    }
    
  render() {
    return (
      <div>
         <main>
                <h4>Movies</h4>
                <input type="search" id="searchInput" class="searchInput" placeholder="Movies"/>
                <Button onClick = {this.addToContainerMovies} class="search_button">Search movies</Button>
                <Button onClick = {this.addToContainerSeries} class="search_button">Search shows</Button>
                <div class="containerMovies" id="containerMovies">
                    <List id="listMovies">
                        {this.state.moviesList.map((movie) => <MoviesMore details={movie} />)}
                    </List>
                </div>
                <div class="containerSeries" id="containerSeries">
                    <List id="listSeries">
                        {this.state.seriesList.map((series) => <SeriesMore details={series} />)}
                    </List>
                </div>
        </main>
      </div>
      
    );
  }
}

export default Results;