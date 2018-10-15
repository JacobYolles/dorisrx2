const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;




const DrugSchema = new Schema({
    // 1.
    ndcNum: {
        type: String,
        required: true
    },
    // 2.
    rxNum: {
        type: Number,
        required: true
    },
    // 3.
    pharmName: {
        type: String,
        required: true
    },
    // 4.
    doctorName: {
        type: String,
        required: true
    },
    // 5.
    drugName: {
        type: String,
        required: true
    },
    // 6.
    drugSizeMeasureType: {
        type: String,
        required: true
    },
    // 7.
    bottleFullQty: {
        type: Number,
        required: true
    },
    // 8.
    bottlePartialQty: {
        type: Number,
        required: true
    },
    // 9.
    rxDiscard: {
        type: Date,
        required: true
    },
    // 10.
    rxReorder: {
        type: Date,
        required: true
    },
    // 11.
    drugDose: {
        type: Number,
        required: true
    },
    // 12.
    drugFreq: {
        type: String,
        required: true
    },
    // 13.
    early: {
        type: Boolean,
        required: false,
    },
    // 14.
    middle: {
        type: Boolean,
        required: false,
    },
    // 15.
    late: {
        type: Boolean,
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
