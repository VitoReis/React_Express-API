const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        lowercase: true
    }
})

const UserModel = mongoose.model('User', User)
module.exports = UserModel