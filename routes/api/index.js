const router = require("express").Router();
const drugRoutes = require("./drug");
const contactRoutes = require("./contact")
const inventoryRoutes = require("./Inventory")

// All routes
router.use("/drugs", drugRoutes);
router.use("/contact", contactRoutes)
router.use("/inventory", inventoryRoutes)

module.exports = router;
