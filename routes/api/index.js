const router = require("express").Router();
const contactRoutes = require("./Contact")
const drugRoutes = require("./Drug");
const fdaRoutes = require("./Fda")
const inventoryRoutes = require("./Inventory")
const userRoutes = require("./User")
var express = require('express');
// All routes
router.use("/contact", contactRoutes)
router.use("/drug", drugRoutes)
router.use("/fda", fdaRoutes)
router.use("/inventory", inventoryRoutes)
router.use("/user", userRoutes)

module.exports = router;

////////////////////////// PASSPORT DATA




