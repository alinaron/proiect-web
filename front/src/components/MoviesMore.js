import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';


class MoviesMore extends Component {
  constructor(props) {
        super(props);
        this.addToFavorite = this.addToFavorite.bind(this)
    }
    addToFavorite(event) {
        event.preventDefault()
        var data = {
            id: this.props.details.id,
            name: this.props.details.title,
            poster_path: this.props.details.poster_path,
            vote_average: this.props.details.vote_average
        }
        fetch("https://webtech-project-georgianaa.c9users.io/favorites", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Server error");
            }
            return response.json();
        });
    }
    render() {
      let details = this.props.details;
      let path = 'https://image.tmdb.org/t/p/w500/'+details.poster_path;
      return (
        <ListItem>
            <img width="50px" height="75px" src={path} alt="poster" />
            <ListItemText>{details.title}</ListItemText>
            <br/>
            <ListItemText id="rating">{"Rating: "+details.vote_average}</ListItemText>
            <br/>
            <Button onClick = {this.addToFavorite} method="POST">Add to favorites</Button>
      </ListItem>
      )  
    }
  }

  export default MoviesMore