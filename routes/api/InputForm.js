const router = require("express").Router();
const InputFormController = require("../../controllers/InputFormController");

// Matches with "/api/books"
router.route("/")
  // .get(New_MedicationController.findAll)
  .post(InputFormController.create);


module.exports = router;
