const router = require("express").Router();
const InputFormRoutes = require("./InputForm");
const ContactFormRoutes = require("./ContactForm")
const inventoryRoutes = require("./Inventory")
const fdaRoutes = require("./Fda")
const userRoutes = require("./User")
// var express = require('express');
// All routes
router.use("/InputForm", InputFormRoutes);
router.use("/ContactForm", ContactFormRoutes)
router.use("/Inventory", inventoryRoutes)
router.use("/fda", fdaRoutes)
router.use("/inventory", inventoryRoutes)
router.use("/user", userRoutes)

module.exports = router;

////////////////////////// PASSPORT DATA




