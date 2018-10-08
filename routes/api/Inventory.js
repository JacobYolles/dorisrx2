const router = require("express").Router();
const inventoryController = require("../../controllers/inventoryController");

// Matches with "/api/books"
router.route("/inventory")
  .get(inventoryController.findAll)
  .post(inventoryController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(inventoryController.findById)
  .put(inventoryController.update)
  .delete(inventoryController.remove);

module.exports = router;
