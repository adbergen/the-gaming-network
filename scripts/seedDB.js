const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gamesplayed");

const gameSeed = [
  {
    title: "Puyo Puyo Tetris",
    platform: "Switch",
  },
  {
    title: "Tetris Ultimate",
    platform: "PS4",
  },
  {
    title: "Puyo Puyo Tetris",
    platform: "PS4",
  },
  {
    title: "Tetris",
    platform: "PSP",
  },
  {
    title: "Puyo Puyo Tetris",
    platform: "PC",
  },
  {
    title: "Tetris Ultimate",
    platform: "3DS",
  },
  {
    title: "Tetris DS",
    platform: "DS",
  },
  {
    title: "Tetris Effect",
    platform: "PS4",
  },
  {
    title: "Tetris Worlds",
    platform: "PS2",
  },
  {
    title: "Tetris Ultimate",
    platform: "XONE",
  },
];

db.Game.remove({})
  .then(() => db.Game.collection.insertMany(gameSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
