const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/books"
router.route("/").get(gamesController.findAll).post(gamesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;
