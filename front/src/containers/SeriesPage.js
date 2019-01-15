import React, { Component } from 'react';
import axios from 'axios'
import List from '@material-ui/core/List';
import SeriesMore from '../components/SeriesMore'
import Season from '../components/Season'

const API_URL = 'https://webtech-project-georgianaa.c9users.io/series'


class SeriesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesList : [],
            episodeList: []
        }
    }
     componentDidMount() {
        axios.get(API_URL).then((result) => {
            this.setState({seriesList: result.data})
        })
    }
  render() {
    return (
      <div>
         <main>
                <h4>Series</h4>
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

export default SeriesPage;