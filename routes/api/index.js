const router = require("express").Router();
const InputFormRoutes = require("./InputForm");
const ContactFormRoutes = require("./ContactForm")
const inventoryRoutes = require("./Inventory")
const fdaRoutes = require("./Fda")

// All routes
router.use("/InputForm", InputFormRoutes);
router.use("/ContactForm", ContactFormRoutes)
router.use("/inventory", inventoryRoutes)
router.use("/fda", fdaRoutes)

module.exports = router;
