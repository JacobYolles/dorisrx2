const router = require("express").Router();
const ContactFormController = require("../../controllers/ContactFormController");

// Matches with "/api/books"
router.route("/")
  // .get(New_MedicationController.findAll)
  .post(ContactFormController.create);


module.exports = router;
