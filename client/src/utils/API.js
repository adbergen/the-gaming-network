import axios from "axios";

export default {
  // Gets all games
  getGames: function () {
    console.log("getGames");
    return axios.get("/api/games");
  },
  // Gets the game with the given id
  getGame: function (id) {
    console.log("getGame", id);
    return axios.get("/api/games/" + id);
  },
  // Deletes the game with the given id
  deleteGame: function (id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a game to the database
  saveGame: function (gameData) {
    console.log("saveGame", gameData);
    return axios.post("/api/games", gameData);
  },
  // getTitle: function (title, platform) {
  //   return axios.post("/api/games/title", {
  //     title: title,
  //     platform: platform,
  //   });
  // },
};
