const router = require("express").Router();
const chickenController = require("../../controllers/chickenController");

// Matches with "/api/books"
router.route("/:title").get(chickenController.findgame);


module.exports = router;
