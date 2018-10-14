const db = require("../models");

// Defining methods for the InputFormController
module.exports = {
  
  create: function(req, res) {
    
    console.log("inside controller res in controller: " , res);
    console.log("inside controller req in controller: " , req);

    db.Drug
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
