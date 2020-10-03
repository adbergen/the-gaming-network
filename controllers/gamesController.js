const db = require("../models");
const axios = require("axios");
const data = "";

async function gameSearch({ title, platform, userEmail }) {
  // axios getting chicken coop api
  console.log("gameSearch title:", title, " platform:", platform);
  var URL =
    "https://chicken-coop.p.rapidapi.com/games/" +
    title +
    "?platform=" +
    platform;
  console.log(URL);
  var config = {
    method: "get",
    url: URL,
    headers: {
      "x-rapidapi-key": "e18bac34e3msha5b66c083be9958p166170jsnd89d26158b34",
    },
    data: data,
  };

  try {
    var apiResp = await axios(config);

    var result = apiResp.data.result;
    console.log("gameSearch apiResp result", result);
    var dbResult = await db.Game.create({
      title: result.title,
      description: result.description,
      releaseDate: result.releaseDate,
      score: result.score,
      developer: result.developer,
      publisher: result.publisher[0],
      genre: result.genre[0],
      rating: result.rating,
      platform: platform,
      userEmail: userEmail,
    });
  } catch (error) {
    console.log(error);
  }
  console.log("API Results", dbResult);
  return dbResult;

  // axios(config)
  // .then(function (response) {
  //   console.log(response.data);
  //   var result = response.data.result;
  //   db.Game.create({
  //     title: result.title,
  //     description: result.description,
  //     releaseDate: result.releaseDate,
  //   }).then(function (dbResult) {
  //     console.log("dbResult", dbResult);
  //   });
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
}

// Defining methods for the GamesController
module.exports = {
  findAll: function (req, res) {
    console.log("findAll");
    db.Game.find({})
      .sort({ date: -1 })
      .then((dbModel) => {
        console.log("Find All dbModel", dbModel);
        res.json(dbModel);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  findAllbyUser: function (req, res) {
    console.log("findAllbyUser");
    db.Game.find({ userEmail: req.params.email })
      .sort({ date: -1 })
      .then((dbModel) => {
        console.log("Find All dbModel", dbModel);
        res.json(dbModel);
      })
      .catch((err) => {
        console.log(err);
        res.status(422).json(err);
      });
  },
  findById: function (req, res) {
    db.Game.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Game.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Game.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Game.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  saveGame: async function (req, res) {
    console.log("saveGame req.body", req.body);
    var dbResult = await gameSearch(req.body);
    console.log("saveGame dbResult", dbResult);
    return res.json(dbResult);

    // db.Game.findById({ _id: req.params.id })
    //   .then((dbModel) => dbModel.remove())
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
  },
};
