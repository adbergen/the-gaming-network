const router = require("express").Router();
const gameRoutes = require("./games");

// Game routes
router.use("/games", gameRoutes);

module.exports = router;
