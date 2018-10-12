const router = require("express").Router();
const fdaController = require("../../controllers/fdaController");

// Matches with "/api/fda"
router.route("/")
  .get(fdaController.findAll)
  .post(fdaController.create);

// Matches with "/api/fda/:id"
router
  .route("/:id")
  .get(fdaController.findById)
  .put(fdaController.update)
  .delete(fdaController.remove);

module.exports = router;
