const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Everyone should be able to import into Robo3T and the mongo shell values with this file. Instructions are included within // tags. 

// everyone should be able to open terminal in mongo, with mongod in the background and paste these in after the following commands:
// use drugs. *switched to db drugs*, insert first item, and then db.drugs.find().pretty() and make sure it was inserted correctly, if it was, then continue to insert all the rest of the items.

// Specific types of information needed for this schema
// (ndcNum, rxNum, pharmName, doctorName , drugName, drugForm, drugFormSize, drugFormMeasure, currentQty, bottleFullQty,
//     bottlePartialQty, rxWritten, rxFilled, rxDiscard, rxReorder, drugDose, drugFreq, early, middle, late,
//     -- Time instead of early middle later.
//     -- rx written rx filled can also be removed.
//     instructions, precautions)

// (ndcNum, rxNum, pharmName, doctorName , drugName, drugForm, drugFormSize, drugFormMeasure, currentQty, bottleFullQty,
//     bottlePartialQty, rxDiscard, rxReorder, drugDose, drugFreq, timeToTake,
//     instructions, precautions)

// early, middle, and late, get rid of a time variable and therefor a date setting.


db.drugs.insert({"ndcNum":13113, "rxNum":45789, "pharmName":"Walgreens", "doctorName":"Dr. Smith", "drugName":"Amoxicylin", "drugForm":"pill", "drugFormSize":100, "drugFormMeasure":"mg", "currentQty":60, "bottleFullQty":90, "bottlePartialQuantity":45, "rxDiscard":2018-10-07, "rxReorder": 2018-10-04, "drugDose":1, "drugFreq":3, "early":"false", "middle":"false", "late":"true", "instructions":"take with 3 glasses of water", "precautions:":"stay close to a bathroom" })

db.drugs.insert({"ndcNum":13112, "rxNum":457911, "pharmName":"Walgreens 2", "doctorName":"Dr. Smith", "drugName":"Amoxicylin", "drugForm":"pill", "drugFormSize":100, "drugFormMeasure":"mg", "currentQty":61, "bottleFullQty":90, "bottlePartialQuantity":0, "rxDiscard":2017-12-04, "rxReorder": 2017-12-04, "drugDose":1, "drugFreq":3, "early":"false", "middle":"true", "late":"false", "instructions":"take with 3 glasses of water", "precautions:":"stay close to a bathroom" })

db.drugs.insert({"ndcNum":13114, "rxNum":45920, "pharmName":"Walgreens 2", "doctorName":"Dr. Smith", "drugName":"Amoxicylin", "drugForm":"pill", "drugFormSize":100, "drugFormMeasure":"mg", "currentQty":61, "bottleFullQty":90, "bottlePartialQuantity":45, "rxDiscard":2017-12-03, "rxReorder": 2017-12-03, "drugDose":1, "drugFreq":3, "early":"true", "middle":"false", "late":"false", "instructions":"take with 3 glasses of water", "precautions:":"stay close to a bathroom" })

db.drugs.insert({"ndcNum":20023, "rxNum":55123, "pharmName":"King Soopers 32", "doctorName":"Dr. Jones", "drugName":"Tylenex", "drugForm":"capsule", "drugFormSize":150, "drugFormMeasure":"mg", "currentQty":9, "bottleFullQty":90, "bottlePartialQuantity":45, "rxDiscard":2017-10-03, "rxReorder": 2017-10-03, "drugDose":1, "drugFreq":2, "early":"true", "middle":"false", "late":"false", "instructions":"take with extreme caution", "precautions:":"whatever happens do not sneeze" })

db.drugs.insert({"ndcNum":20026, "rxNum":4555789, "pharmName":"King Soopers 32", "doctorName":"Dr. Jones", "drugName":"Melatonin", "drugForm":"liquid", "drugFormSize":150, "drugFormMeasure":"mL", "currentQty":25, "bottleFullQty":90, "bottlePartialQuantity":45, "rxDiscard":2017-12-03, "rxReorder": 2017-12-03, "drugDose":1, "drugFreq":1, "early":"true", "middle":"false", "late":"false", "instructions":"perform stringent excersize after consumption", "precautions:":"do not watch aggitating programs like the news" })

db.drugs.insert({"ndcNum":20023, "rxNum":123459, "pharmName":"King Soopers 32", "doctorName":"Dr. Jones", "drugName":"Equate", "drugForm":"liquid", "drugFormSize":150, "drugFormMeasure":"mL", "currentQty":25, "bottleFullQty":90, "bottlePartialQuantity":45, "rxDiscard":2017-12-03, "rxReorder": 2017-12-03, "drugDose":1, "drugFreq":1, "early":"true", "middle":"false", "late":"false", "instructions":"perform stringent excersize after consumption", "precautions:":"do not watch aggitating programs like the news" })

db.drugs.insert({"ndcNum":12345, "rxNum":678910, "pharmName":"RiteAid #10", "doctorName":"Dr. Brown", "drugName":"Accutane", "drugForm":"tablet", "drugFormSize":900, "drugFormMeasure":"g", "currentQty":3, "bottleFullQty":120, "bottlePartialQuantity":114, "rxDiscard":2017-09-03, "rxReorder": 2017-09-03, "drugDose":1, "drugFreq":1, "early":"true", "middle":"false", "late":"false", "instructions":"jump up and down while taking", "precautions:":"do not drive or operate heavy machinery for up to 2 hours after taking." })

db.drugs.insert({"ndcNum":12345, "rxNum":678910, "pharmName":"RiteAid #10", "doctorName":"Dr. Brown", "drugName":"Lipitor", "drugForm":"tablet", "drugFormSize":900, "drugFormMeasure":"g", "currentQty":3, "bottleFullQty":120, "bottlePartialQuantity":114, "rxDiscard":2017-09-03, "rxReorder": 2017-09-03, "drugDose":1, "drugFreq":1, "early":"true", "middle":"false", "late":"false", "instructions":"jump up and down while taking", "precautions:":"do not drive or operate heavy machinery for up to 2 hours after taking." })

db.drugs.insert({"ndcNum":12347, "rxNum":14321, "pharmName":"RiteAid #10", "doctorName":"Dr. Brown", "drugName":"Danazol", "drugForm":"tablet", "drugFormSize":900, "drugFormMeasure":"g", "currentQty":3, "bottleFullQty":120, "bottlePartialQuantity":114, "rxDiscard":2017-09-03, "rxReorder": 2017-09-03, "drugDose":1, "drugFreq":1, "early":"false", "middle":"true", "late":"false", "instructions":"jump up and down while taking", "precautions:":"do not drive or operate heavy machinery for up to 2 hours after taking." })

db.drugs.insert({"ndcNum":12347, "rxNum":14321, "pharmName":"RiteAid #10", "doctorName":"Dr. Brown", "drugName":"Valstar", "drugForm":"tablet", "drugFormSize":2000, "drugFormMeasure":"mg", "currentQty":12, "bottleFullQty":120, "bottlePartialQuantity":0, "rxDiscard":2017-09-03, "rxReorder": 2017-09-03, "drugDose":1, "drugFreq":1, "early":"false", "middle":"true", "late":"false", "instructions":"take with a full meal.", "precautions:":"do not exhibit aggression for up to 1 hour after taking." })

db.drugs.insert({"ndcNum":12347, "rxNum":14321, "pharmName":"RiteAid #10", "doctorName":"Dr. Jones", "drugName":"Adderol", "drugForm":"pill", "drugFormSize":350, "drugFormMeasure":"mg", "currentQty":45, "bottleFullQty":120, "bottlePartialQuantity":0, "rxDiscard":2017-09-03, "rxReorder": 2017-09-03, "drugDose":1, "drugFreq":1, "early":"true", "middle":"false", "late":"false", "instructions":"take with 2 cups of coffee.", "precautions:":"do not talk to others before taking." })

//

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const DrugSchema = new Schema({
    ndcNum: {
        type: Number,
        required: true
    },
    rxNum: {
        type: Number,
        required: true
    },
    pharmName: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    drugName: {
        type: String,
        required: true
    },
    drugForm: {
        type: String,
        required: true
    },
    drugFormSize: {
        type: Number,
        required: true
    },
    drugFormMeasure: {
        type: String,
        required: true
    },
    currentQty: {
        type: Number,
        required: true
    },
    bottleFullQty: {
        type: Number,
        required: true
    },
    bottlePartialQty: {
        type: Number,
        required: true
    },
    rxDiscard: {
        type: Date,
        required: true
    },
    rxReorder: {
        type: Date,
        required: true
    },
    drugDose: {
        type: Number,
        required: true
    },
    drugFreq: {
        type: String,
        required: true
    },
    early: {
        type: String,
        required: true
    },
    middle: {
        type: String,
        required: true
    },
    late: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    precautions: {
        type: String,
        required: true
    },

});
// NOTE: Does anything want to have associated popups that occur at specific times? If so what? and where to attach them?

// This creates our model from the above schema, using mongoose's model method
const Drug = mongoose.model("Drug", DrugSchema);


// Export the Article model
module.exports = Drug;
