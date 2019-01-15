import React, { Component } from 'react';
import axios from 'axios'
import List from '@material-ui/core/List';
import MoviesMore from '../components/MoviesMore'

const API_URL = 'https://webtech-project-georgianaa.c9users.io/movies'


class MoviesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesList : [],
        }
    }
    
    componentDidMount() {
        axios.get(API_URL).then((result) => {
            this.setState({moviesList: result.data})
        })
    }
    
  render() {
    return (
      <div>
         <main>
                <h4>Movies</h4>
                <div class="containerMovies" id="containerMovies">
                    <List id="listMovies">
                        {this.state.moviesList.map((movie) => <MoviesMore details={movie} />)}
                    </List>
                </div>
        </main>
      </div>
      
    );
  }
}

export default MoviesPage;