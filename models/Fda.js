const mongoose = require("mongoose");

const Schema = mongoose.Schema;


// This model is using underscores instead of camel casing.
//indications_and_usage" .   "warnings" . "dosage_and_administration"

const FdaSchema = new Schema({

    brand_name: {
        type: String,
        required: false
    },

    indications_and_usage: {
        type: String,
        required: true,
    },
    warnings: {
        type: String,
        required: true,
    },
    dosage_and_administration: {
        type: String,
        required: true,
    },

});

const Fda = mongoose.model("Fda", FdaSchema);


// Export the Article model
module.exports = Fda;
//warnings, directions, usage, and dosage and administration.