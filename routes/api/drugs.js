const router = require("express").Router();
const drugsController = require("../../controllers/drugsController");

// Matches with "/api/books"
router.route("/")
  .get(drugsController.findAll)
  .post(drugsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(drugsController.findById)
  .put(drugsController.update)
  .delete(drugsController.remove);

module.exports = router;
