const router = require("express").Router();
const drugRoutes = require("./drug");
const contactRoutes = require("./Contact")
const inventoryRoutes = require("./Inventory")
const fdaRoutes = require("./Fda")

// All routes
router.use("/drug", drugRoutes);
router.use("/contact", contactRoutes)
router.use("/inventory", inventoryRoutes)
router.use("/fda", fdaRoutes)

module.exports = router;
