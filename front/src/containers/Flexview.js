import React, { Component } from 'react';
import axios from 'axios'
import List from '@material-ui/core/List';
import Series from '../components/Series'
import Movie from '../components/Movie'


const API_SERIES_URL = 'https://api.themoviedb.org/3/trending/tv/day?api_key=9d4e4d893f92db6be6b49b2e3961e6de' 
const API_MOVIES_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=9d4e4d893f92db6be6b49b2e3961e6de'

class Flexview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingSeries : [],
            trendingMovies : []
        }
    }
    
    componentDidMount() {
        axios.get(API_SERIES_URL).then((result) => {
            this.setState({trendingSeries: result.data.results})
        })
        axios.get(API_MOVIES_URL).then((result) => {
            this.setState({trendingMovies: result.data.results})
        })
    }
    
  render() {
    return (
      <div>
         <main>
            <form action="">
                <button type="button" class="hbutton" id="buttonShows">TV Shows</button>
                <button type="button" class="hbutton" id="buttonMovies">Movies</button>
                <button type="button" class="hbutton" id="buttonGenres">Genres</button>
                <button type="button" class="hbutton" id="buttonFavorites">Favorites</button>
            </form>
            <h3>Trending</h3>
            <div class="containerTrending">
                <h6>Series</h6>
                <div class="containerSeries" id="containerSeries">
                    <List>
                        {this.state.trendingSeries.map((series) => <Series profile={series} />)}
                    </List>
                </div>
                <h6>Movies</h6>
                <div class = "containerMovies" id="containerMovies">
                    <List>
                        {this.state.trendingMovies.map((movie) => <Movie profile={movie} />)}
                    </List>
                </div>
            </div>
        </main>
      </div>
      
    );
  }
}

export default Flexview;