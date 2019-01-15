const express = require("express");
const Sequelize = require("sequelize");

const sequelize = new Sequelize('moviedb', 'root', '', {
    dialect: "mysql",
    host: "localhost"
});

sequelize.authenticate().then(() => {
    console.log('Connected to the database')
}).catch(() => {
    console.log('Unable to connect to database')
});

//modele baza de date

const Movies = sequelize.define('movies', {
    id: { 
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING,
    language: Sequelize.STRING,
    popularity: Sequelize.FLOAT,
    release_date: Sequelize.DATE,
    runtime: Sequelize.INTEGER,
    status: Sequelize.STRING,
    tagline: Sequelize.TEXT,
    vote_average: Sequelize.FLOAT,
    vote_count: Sequelize.INTEGER,
    poster_path: Sequelize.STRING
});

const Series = sequelize.define('series', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    first_air_date: Sequelize.DATE,
    homepage: Sequelize.STRING,
    in_production: Sequelize.BOOLEAN,
    last_air_date: Sequelize.DATE,
    language: Sequelize.STRING,
    overview: Sequelize.TEXT,
    poster_path: Sequelize.STRING,
    status: Sequelize.STRING,
    vote_average: Sequelize.FLOAT,
    vote_count: Sequelize.INTEGER
});

const Favorites = sequelize.define('favorites', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    poster_path: Sequelize.STRING,
    vote_average: Sequelize.FLOAT
});

const Episodes = sequelize.define('episodes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    overview: Sequelize.TEXT,
    episode_number: Sequelize.INTEGER,
    vote_average: Sequelize.FLOAT,
    vote_count: Sequelize.INTEGER
});

const Seasons = sequelize.define('seasons', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING,
    season_number: Sequelize.INTEGER,
    overview: Sequelize.TEXT,
    poster_path: Sequelize.STRING
});

const Genres = sequelize.define('genres', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: Sequelize.STRING
});

const GenresSeries = sequelize.define('genres_series', {
    genre_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Genres,
            key:'id'
        }
    },
    series_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Series,
            key:'id'
        }
    }
});

Series.hasMany(Seasons);
Seasons.hasMany(Episodes);


const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static('front/build'));

//endpoint creare baze de date
app.get('/createdb', function(request, response) {
    sequelize.sync({force:true}).then(function() {
        response.status(200).send('tables created')
    }).catch(function(){
        response.status(500).send('there was an error at creating tables')
    })
});


//API endpoint /movies

app.get('/movies', (request, response) => {
    Movies.findAll().then((results) => {
        response.status(200).json(results);
    })
});

app.post('/movies', (request, response) => {
   Movies.create(request.body).then((result) => {
       response.status(201).json(result);
   }).catch((err) => {
       console.log(err);
       response.status(500).send('Resource not created');
   })
});
app.get('/movies/:id', (request, response) => {
    Movies.findById(request.params.id).then((movie) => {
        if(movie) {
            response.status(200).json(movie);
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
});

app.put('/movies/:id', (request, response) => {
    Movies.findById(request.params.id).then((movie) => {
        if(movie) {
            movie.update(request.body).then((result) => {
                response.status(201).json(result);
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Resource not found');
    })
});

app.delete('/movies/:id', (request, response) => {
    Movies.findById(request.params.id).then((movie) => {
        if(movie) {
            movie.destroy().then((result) => {
                response.status(204).send();
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
})

//API endpoint /favorites
app.get('/favorites', (request, response) => {
    Favorites.findAll().then((results) => {
        response.status(200).json(results);
    })
});
app.post('/favorites', (request, response) => {
   Favorites.create(request.body).then((result) => {
       response.status(201).json(result);
   }).catch((err) => {
       console.log(err);
       response.status(500).send('Resource not created');
   })
});
app.get('/favorites/:id', (request, response) => {
    Favorites.findById(request.params.id).then((favorite) => {
        if(favorite) {
            response.status(200).json(favorite);
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
});

app.put('/favorites/:id', (request, response) => {
    Favorites.findById(request.params.id).then((favorite) => {
        if(favorite) {
            favorite.update(request.body).then((result) => {
                response.status(201).json(result);
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Resource not found');
    })
});

app.delete('/favorites/:id', (request, response) => {
    Favorites.findById(request.params.id).then((favorite) => {
        if(favorite) {
            favorite.destroy().then((result) => {
                response.status(204).send();
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
})

//API endpoint /series
app.get('/series', (request, response) => {
    Series.findAll().then((results) => {
        response.status(200).json(results);
    })
});

app.get('/series/:id', (request, response) => {
    Series.findById(request.params.id).then((result) => {
        if(result) {
            response.status(200).json(result);
        } else {
            response.status(404).send('resourse not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error')
    })
});

app.post('/series', (request, response) => {
    Series.create(request.body).then((result) => {
        response.status(201).json(result)
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Resource not created');
    })
})

app.put('/series/:id', (request, response) => {
    Series.findById(request.params.id).then((serie) => {
        if(serie) {
            serie.update(request.body).then((result) => {
                response.status(201).json(result);
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            }) 
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
});

app.delete('/series/:id', (request, response) => {
    Series.findById(request.params.id).then((series) => {
        if(series) {
            series.destroy().then((result) => {
                response.status(204).send();
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
});

//API endpoint /seasons
app.get('/series/:sid/seasons', (request, response)=> {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findAll({
                where: {
                    seriesId : series.id
                }
            }).then((results) => {
                response.status(200).json(results);
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
});

app.get('/series/:sid/seasons/:no', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number: request.params.no,
                    seriesId : series.id
                }
            }).then((result) => {
                if(result){
                    response.status(200).json(result);
                }
                else {
                    response.status(404).send('Resource not found');
                }
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error')
    })
})

app.post('/series/:sid/seasons', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            let season = request.body;
            season.seriesId = series.id;
            Seasons.create(season).then((result) => {
                response.status(201).json(result);
            });
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send("Resource not created");
    })
});

app.put('/series/:sid/seasons/:no', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number: request.params.no,
                    seriesId : series.id
                }
            }).then((season) => {
                if(season) {
                    season.update(request.body).then((result) => {
                        response.status(201).json(result);
                    }).catch((err) => {
                        console.log(err);
                        response.status(500).send('Database error');
                    })
                } else {
                    response.status(404).send('Resource not found');
                }
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    })
});

app.delete('/series/:sid/seasons/:no', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number : request.params.no,
                    seriesId : series.id
                }
            }).then((season) => {
                if(season) {
                    season.destroy().then((result) => {
                        response.status(204).send()
                    }).catch((err) => {
                        console.log(err);
                        response.status(500).send('Database error');
                    })
                } else {
                    response.status(404).send('Resource not found');
                }
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
})

app.get('/series/:sid/seasons/:sno/episodes', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number: request.params.sno,
                    seriesId: series.id
                }
            }).then((season)=> {
                if(season) {
                    Episodes.findAll({
                        where: {
                            seasonId: season.id
                        }
                    }).then((results) => {
                        response.status(200).json(results);
                    }).catch((err) => {
                        console.log(err);
                        response.status(500).send('Resource not found');
                    })
                } else {
                    response.status(404).send('Resource not found');
                }
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Resource not found');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
})

app.get('/series/:sid/seasons/:sno/episodes/:eno', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number: request.params.sno,
                    seriesId: series.id
                }
            }).then((season)=> {
                if(season) {
                    Episodes.findOne({
                        where: {
                            seasonId: season.id,
                            episode_number: request.params.eno
                        }
                    }).then((result) => {
                        response.status(200).json(result);
                    }).catch((err) => {
                        console.log(err);
                        response.status(500).send('Resource not found');
                    })
                } else {
                    response.status(404).send('Resource not found');
                }
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Resource not found');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })    
})

app.post('/series/:sid/seasons/:sno/episodes', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number: request.params.sno,
                    seriesId: series.id
                }
            }).then((season) => {
                if(season) {
                    let episode = request.body;
                    episode.seasonId = season.id;
                    Episodes.create(episode).then((result) => {
                        response.status(201).json(result);
                    })
                } else {
                    response.status(404).send('Resource not found');
                }
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
})

app.put('/series/:sid/seasons/:sno/episodes/:eno', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number: request.params.sno,
                    seriesId: series.id
                }
            }).then((season) =>{
                if(season) {
                    Episodes.findOne({
                        where: {
                            seasonId: season.id,
                            episode_number: request.params.eno
                        }
                    }).then((episode) => {
                        if(episode) {
                            episode.update(request.body).then((result) => {
                                response.status(201).json(result);
                            }).catch((err) => {
                                console.log(err);
                                response.status(500).send('Database error');
                            })
                        } else {
                            response.status(404).send('Resource not found');
                        }
                    }).catch((err) => {
                        console.log(err);
                        response.status(500).send('Database error');
                    })
                } else {
                    response.status(404).send('Resource not found');
                }
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
})

app.delete('/series/:sid/seasons/:sno/episodes/:eno', (request, response) => {
    Series.findById(request.params.sid).then((series) => {
        if(series) {
            Seasons.findOne({
                where: {
                    season_number: request.params.sno,
                    seriesId: series.id
                }
            }).then((season) =>{
                if(season) {
                    Episodes.findOne({
                        where: {
                            seasonId: season.id,
                            episode_number: request.params.eno
                        }
                    }).then((episode) => {
                        if(episode) {
                            episode.destroy().then((result) => {
                                response.status(204).send();
                            }).catch((err) => {
                                console.log(err);
                                response.status(500).send('Database error');
                            })
                        } else {
                            response.status(404).send('Resource not found');
                        }
                    }).catch((err) => {
                        console.log(err);
                        response.status(500).send('Database error');
                    })
                } else {
                    response.status(404).send('Resource not found');
                }
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })    
})

//APIs for endpoint /genres

app.get('/genres', (request, response) => {
    Genres.findAll().then((results) => {
        response.status(200).json(results);
    })
});

app.post('/genres', (request, response) => {
   Genres.create(request.body).then((result) => {
       response.status(201).json(result);
   }).catch((err) => {
       console.log(err);
       response.status(500).send('Resource not created');
   })
});

app.get('/genres/:id', (request, response) => {
    Genres.findById(request.params.id).then((genre) => {
        if(genre) {
            response.status(200).json(genre);
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
});

app.put('/genres/:id', (request, response) => {
    Genres.findById(request.params.id).then((genre) => {
        if(genre) {
            genre.update(request.body).then((result) => {
                response.status(201).json(result);
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Resource not found');
    })
});

app.delete('/genres/:id', (request, response) => {
    Genres.findById(request.params.id).then((genre) => {
        if(genre) {
            genre.destroy().then((result) => {
                response.status(204).send();
            }).catch((err) => {
                console.log(err);
                response.status(500).send('Database error');
            })
        } else {
            response.status(404).send('Resource not found');
        }
    }).catch((err) => {
        console.log(err);
        response.status(500).send('Database error');
    })
})


app.listen(8080);
