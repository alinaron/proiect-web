import React, { Component } from 'react';
import axios from 'axios'
import List from '@material-ui/core/List';
import FavoritesMore from '../components/FavoritesMore'

const API_URL = 'https://webtech-project-georgianaa.c9users.io/favorites'


class FavoritesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesList : [],
        }
    }
    
    componentDidMount() {
        axios.get(API_URL).then((result) => {
            this.setState({favoritesList: result.data})
        })
    }
    
  render() {
    return (
      <div>
         <main>
                <h4>Favorites</h4>
                <div class="containerFavorites" id="containerFavorites">
                    <List>
                        {this.state.favoritesList.map((fav) => <FavoritesMore details={fav} />)}
                    </List>
                </div>
        </main>
      </div>
      
    );
  }
}

export default FavoritesPage;