const router = require("express").Router();
const InputFormRoutes = require("./InputForm");
const contactRoutes = require("./Contact")
const inventoryRoutes = require("./Inventory")
const fdaRoutes = require("./Fda")

// All routes
router.use("/InputForm", InputFormRoutes);
router.use("/contact", contactRoutes)
router.use("/inventory", inventoryRoutes)
router.use("/fda", fdaRoutes)

module.exports = router;
