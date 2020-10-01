const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/games"
router.route("/").get(gamesController.findAll).post(gamesController.saveGame);

// Matches with "/api/games/title"
router
  .route("/title")
  .get(gamesController.findById)
  .post(gamesController.saveGame)
  .put(gamesController.update)
  .delete(gamesController.remove);

// Matches with "/api/games/:id"
router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
