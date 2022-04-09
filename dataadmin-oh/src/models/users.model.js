const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    _id: String,
    email: String,
    encryptedPassword: String,
    role: {
        type: String,
        enum: ['admin', 'user']
    },
    groupId: {
        type: String,
        enum: ['groupA', 'groupB', 'groupC', 'oh']
    }
}, {
    _id: false
})

const User = mongoose.model('User', UserSchema, 'Users')

module.exports = User