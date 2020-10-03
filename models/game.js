const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  genre: { type: String },
  releaseDate: { type: Date, default: Date.now },
  score: { type: Number },
  developer: { type: String },
  publisher: { type: String },
  genre: { type: String },
  rating: { type: String },
  platform: { type: String },
  userEmail: {
    type: String,
  },
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
