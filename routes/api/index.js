const router = require("express").Router();
const gameRoutes = require("./games");

// Book routes
router.use("/games", gameRoutes);

module.exports = router;
