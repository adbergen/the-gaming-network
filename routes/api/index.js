const router = require("express").Router();
const gameRoutes = require("./games");
const chickenRoutes = require("./chicken");

// Book routes
router.use("/games", gameRoutes);
router.use("/chicken", chickenRoutes);

module.exports = router;
