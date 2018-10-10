const router = require("express").Router();
const drugController = require("../../controllers/drugController");

// Matches with "/api/books"
router.route("/")
  .get(drugController.findAll)
  .post(drugController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(drugController.findById)
  .put(drugController.update)
  .delete(drugController.remove);

 




module.exports = router;
