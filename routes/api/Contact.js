const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/books"
router.route("/contacts")
  .get(contactController.findAll)
  .post(contactController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contactController.findById)
  .put(contactController.update)
  .delete(contactController.remove);

module.exports = router;
