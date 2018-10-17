const db = require("../models");

// Defining methods for the InputFormController
module.exports = {
  create: function(req, res) {
    const drugInfo = req.body;

    // console.log("inside controller res in controller: " , res);
    // console.log("inside controller req in controller: " , req);

    db.Drug.findOne({ drugName: drugInfo.drugName }).then(foundDrug => {
      console.log("found Drug: ", foundDrug);
      // if drug js new

      if (!foundDrug) {
        const {
          drugName,
          drugDose,
          drugFrequency,
          drugSizeMeasureType,
          early,
          middle,
          late,
          currentQuantity
        } = drugInfo;

        // added to inventory collection
        db.Inventory.create({
          drugName,
          drugDose,
          drugForm: drugSizeMeasureType,
          early,
          mid: middle,
          late,
          drugFrequency,
          taken: false,
          currentQuantity
        }).then(
          createdInventoryDrug =>
            console.log("here is created: ", createdInventoryDrug),
          err => console.log(err)
        );
      }
    // create the drug in the drugs table anyway
      db.Drug.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    });
    
  }
};

