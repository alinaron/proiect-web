import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Season extends Component {
    render() {
      let details = this.props.details;
      let path = 'https://image.tmdb.org/t/p/w500/'+details.poster_path;
      return (
        <ListItem>
            <img width="25px" height="37.5px" src={path} alt="poster" />
            <ListItemText>{details.season_number}</ListItemText>
            <ListItemText>{details.overview}</ListItemText>
            <br/>
      </ListItem>
      )  
    }
  }

  export default Season