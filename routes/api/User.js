// var express = require("express")
const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/books"
router.route("/authentication")
  .get(userController.findAll)
  .post(userController.create);


// router.get("/", function (req, res) {
  
// })
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
