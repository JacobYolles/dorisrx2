const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//use contacts,

// db.contacts.insert({"pharmName":"Walgreens", "doctorName":"Dr. Matlock", "address":"789 South Southern Street", "city":"Littleton", "state":"CO", "zip":80128, "locationId":"RAF777", "email":"drmatlock@msnbc.com", "phone":"720-555-5555"})

// db.contacts.insert({"pharmName":"Walgreens", "doctorName":"Dr. Jones", "address":"789 South Southern Street", "city":"Denver", "state":"CO", "zip":80220, "locationId":"RAF777", "email":"drjones@msnbc.com", "phone":"720-555-5555"})
// // INSERT INTO contacts
//     (pharmName, doctorName, address, city, state, zip, locationId, email, phone)

// VALUES
//     ("Walgreens", "Dr. Matlock", "789 South Southern Street", "Littleton", "CO", "80128",
//         "RAF777", "drmatlock@realdoctor.com", "720-555-5555")


// INSERT INTO contacts
//     (type, name, address, city, state, zip, locationId, email, phone)

// VALUES
//     ("Doctor", "Dr. Matlock", "789 South Southern Street", "Littleton", "CO", "80128",
//         "RAF777", "drmatlock@realdoctor.com", "720-555-5555");


const ContactSchema = new Schema({
    pharmName: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    locationId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        $regex: /@mongodb\.com$/,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
})

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact