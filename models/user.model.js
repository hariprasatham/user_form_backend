const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
    },
    dob: {
        type: Date
    },
    email: {
        type: String
    },
    address_line_1: {
        type: String
    },
    address_line_2: {
        type: String
    },
    city: {
        type: String
    },
    district: {
        type: String
    },
    state: {
        type: String
    },
    active_user: {
        type: Boolean
    }
})

module.exports = mongoose.model("User", userSchema)