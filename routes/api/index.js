const router = require("express").Router();
const drugRoutes = require("./Drug");
const contactRoutes = require("./Contact");
const inventoryRoutes = require("./Inventory");


// All routes

router.use("/drug", drugRoutes);
router.use("/contact", contactRoutes);
router.use("/inventory", inventoryRoutes);


module.exports = router;
