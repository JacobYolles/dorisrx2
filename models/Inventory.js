const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const InventorySchema = new Schema({
   
//    1.
    drugName: {
        type: String,
        required: true
    },
// 2.
    currentQuantity: {
        type: Number,
        required: true
    },
// 3.
    taken: {
        type: Boolean,
        required: true
    },
// 4.
    drugDose: {
        type: Number,
        required: true
// 5.
    },
    drugFrequency: {
        type: Number,
        required: true
    },
// 6.
    drugForm: {
        type: String,
        required: false,
    },
//  7.   
    early: {
        type: String,
        default: false,
    },
//  8.   
    middle: {
        type: String,
        default: false,
    },
//  9.
    late: {
        type: String,
        required: false
    }

})

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory


