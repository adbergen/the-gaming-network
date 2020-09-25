import axios from "axios";

export default {
  searchChicken: function (title) {
    return axios.get("/api/chicken/" + title)
  },
  // Gets all books
  getGames: function () {
    return axios.get("/api/games");
  },
  // Gets the book with the given id
  getGame: function (id) {
    return axios.get("/api/games/" + id);
  },
  // Deletes the book with the given id
  deleteGame: function (id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a book to the database
  saveGame: function (gameData) {
    return axios.post("/api/games", gameData);
  },
};


