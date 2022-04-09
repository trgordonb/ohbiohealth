const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SessionSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    date: Date,
    duration: Number,
    improvement: Number
})

const Session = mongoose.model('Session', SessionSchema, 'Sessions')

module.exports = Session

