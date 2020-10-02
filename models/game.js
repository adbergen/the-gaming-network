const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, default: Date.now },
  userEmail:  {
    type: String,
    
  }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
