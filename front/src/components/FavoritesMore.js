import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class FavoritesMore extends Component {
  constructor(props) {
        super(props);
    }
   deleteFavorite(movie){
    var data = {
        id: movie.id
    }
    fetch("https://webtech-project-georgianaa.c9users.io/favorites/"+data.id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
    });
}
    render() {
      let details = this.props.details;
      let path = 'https://image.tmdb.org/t/p/w500/'+details.poster_path;
      return (
        <ListItem>
            <img width="50px" height="75px" src={path} alt="poster" />
            <ListItemText>{details.name}</ListItemText>
            <ListItemText id="rating">{"Rating: "+details.vote_average}</ListItemText>
            <br/>
            <Button onClick={() => this.deleteFavorite(details)}>Delete</Button>
            
      </ListItem>
      )  
    }
  }

  export default FavoritesMore;