const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        $regex: /@mongodb\.com$/,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    
})

const User = mongoose.model("User", UserSchema)

module.exports = User