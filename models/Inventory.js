const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// DROP TABLE IF EXISTS inventory;
// CREATE TABLE inventory
// (
//     id INT (40) AUTO_INCREMENT,  
//     drugName VARCHAR (40) NOT NULL,
//     bottleFullQty INT,
//     bottlePartialQty INT, 
//     drugDose INT,,
//     drugFrew INT,
//     bottleCount INT
//     PRIMARY KEY
//     (id)
// );

// use inventory, then paste into and hit enter up to 2x. in robo 3t you will see the inventory db created with these data points.

// db.inventory.insert({"drugName":"Lipitor", "bottleFullQuantity":70, "bottlePartialQuantity":40, "drugDose":"30mg", "drugFrequency":2, "bottleCount":1})

// db.inventory.insert({"drugName":"Melatonin", "bottleFullQuantity":80, "bottlePartialQuantity":50, "drugDose":"10mg", "drugFrequency":1, "bottleCount":1})

// db.inventory.insert({"drugName":"Adderol", "bottleFullQuantity":30, "bottlePartialQuantity":15, "drugDose":"20mg", "drugFrequency":2, "bottleCount":1})



const InventorySchema = new Schema({
    drugName: {
        type: String,
        required: true
    },
    currentQuantity: {
        type: Number,
        required: true
    },
    taken: {
        type: Boolean,
        required: true
    },
    drugDose: {
        type: Number,
        required: true
    },
    drugFrequency: {
        type: Number,
        required: true
    },
    early: {
        type: String,
        default: false,
    },
    middle: {
        type: String,
        default: false,
    },
    late: {
        type: String,
        required: false
    }

})

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory