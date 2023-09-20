// this 'imports' the 'Joke' variable that was created in our model file
const Joke = require('../models/joke.model');

// Note about exports: There is a different way to do a 'bulk' export
// that would look like:
// const findOneJoke = (req, res) => {
//    ...
// }
//
// module.export = {
//   findOneJoke,
//   ...
// }

// create and export function to *get* one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke: oneJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err})
        });
}

// create and export function to *create* one joke
module.exports.createJoke = (req, res) => {
    console.log(req.body); // can use 'req.body' as on this line -or-
    const { body } = req; // destructure 'req' as done on this line
    Joke.create(body)
        .then(createdJoke => {
            res.json({ joke: createdJoke })
        })
        .catch(err => {
            console.log({ message: 'Something went wrong', error:err})
        });
}

// create and export function to *update* one joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body,
        { new: true, runValidators: true } // need to learn what these ' option parameters' are for
        )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke})
        })
        .catch(err => {
            console.log({message: "Something went wrong ", error:err})
        });
}
// create and export function to *delete* one joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch(err => {
            console.log({message: "Something went wrong ", error:err})
        });
}

// create and export function to *get* all jokes
module.exports.findAllJokes = (req,res) => {
    Joke.find()
        .then(allJokes => {
            res.json({ jokes: allJokes})
        })
        .catch(err => {
            console.log({message: "Something went wrong ", error:err})
        });
}

// create and export function to *get* one random joke
module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            let randomIndex = Math.floor(Math.random()*allJokes.length)
            let oneJoke = allJokes[randomIndex];
            res.json({ jokes: oneJoke});
        })
        .catch(err => {
            console.log({message: "Something went wrong ", error:err})
        });
}