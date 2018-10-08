const router = require("express").Router();
const drugRoutes = require("./drug");
const contactRoutes = require("./contact")

// All routes
router.use("/drugs", drugRoutes);
router.use("/contact", contactRoutes)

module.exports = router;
