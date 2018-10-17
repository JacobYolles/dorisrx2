const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const ContactSchema = new Schema({
    pharmName: {
        type: String,
        required: false
    },
    doctorName: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zip: {
        type: String,
        required: false
    },
    locationId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        // $regex: /@mongodb\.com$/,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
})

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact