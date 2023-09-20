const JokeController = require("../controllers/joke.controller")

module.exports = app => {
    // '/api/jokes' -> returns a list of all jokes
    app.get('/api/jokes', JokeController.findAllJokes);

    // '/api/jokes' -> returns a single random joke
    app.get('/api/jokes/lucky', JokeController.findRandomJoke);

    // '/api/jokes/:id' -> returns one joke with a matching id
    app.get('/api/jokes/:id', JokeController.findOneJoke);

    // '/api/jokes' POST -> adds a new joke to the database
    app.post('/api/jokes', JokeController.createJoke);

    // '/api/jokes/:id' PATCH -> Partial updates an existing joke with a matching :id
    app.patch('/api/jokes/:id', JokeController.updateJoke)

    // '/api/jokes/:id' DELETE -> removes a joke with a matching :id
    app.delete('/api/jokes/:id', JokeController.deleteJoke)
}



