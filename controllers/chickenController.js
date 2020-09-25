require("dotenv").config();
const unirest = require("unirest");

// Defining methods for the GamesController
module.exports = {
  findgame: function (req, res) {
    var unireq = unirest(
      "GET",
      "https://chicken-coop.p.rapidapi.com/games/" + req.params.title
    );
    
    unireq.query({
      platform: "pc",
    });

    unireq.headers({
      "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      useQueryString: true,
    });

    unireq.end(function (chickenres) {
      if (chickenres.error) throw new Error(chickenres.error);

      console.log(chickenres.body);
      res.json(chickenres.body);
    });
    
  },
};
