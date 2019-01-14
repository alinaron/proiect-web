import React, { Component } from 'react';

import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

class Movie extends Component {
    render() {
      let profile = this.props.profile;
      
      return (
        <ListItem>
            <ListItemAvatar>
                {
                profile.poster_path 
                    ? <Avatar width={50} height={75} src={'https://image.tmdb.org/t/p/w500/'+profile.poster_path} />
                    : <Avatar src="nopic.png" />
                }
            </ListItemAvatar>
            <ListItemText>{profile.original_title}</ListItemText>
            <br/>
      </ListItem>
      )  
    }
  }

  export default Movie