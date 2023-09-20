const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // Add validations here
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [15, "Setup must be at least 15 characters"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters"]
    }
},
{ timestamps: true }
);

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;