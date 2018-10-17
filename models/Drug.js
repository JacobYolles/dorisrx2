const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;




const DrugSchema = new Schema({
    // 1.
    ndcNum: {
        type: String,
        required: false
    },
    // 2.
    rxNum: {
        type: Number,
        required: false
    },
    // 3.
    pharmName: {
        type: String,
        required: false
    },
    // 4.
    doctorName: {
        type: String,
        required: false
    },
    // 5.
    drugName: {
        type: String,
        required: false
    },
    // 11.
    drugDose: {
        type: Number,
        required: false
    },
    // 6.
    drugSizeMeasureType: {
        type: String,
        required: false
    },
    // 7.
    bottleFullQty: {
        type: Number,
        required: false
    },
    // 8.
    bottlePartialQty: {
        type: Number,
        required: false
    },
    // 9.
    rxDiscard: {
        type: Date,
        required: false
    },
    // 10.
    rxReorder: {
        type: Date,
        required: false
    },
    
    // 12.
    drugFreq: {
        type: String,
        required: false
    },
    // 13.
    early: {
        type: String,
        required: false,
    },
    // 14.
    middle: {
        type: String,
        required: false,
    },
    // 15.
    late: {
        type: String,
        required: false,
    },
    // 16.
    currentQty: {
        type: Number,
        required: false
    }

});



const Drug = mongoose.model("Drug", DrugSchema);


// Export the Article model
module.exports = Drug;
