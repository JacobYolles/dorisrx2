const router = require("express").Router();
const drugRoutes = require("./drugs");

// Book routes
router.use("/drugs", drugRoutes);

module.exports = router;
