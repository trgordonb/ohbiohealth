const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autoIncrement = require('mongoose-plugin-autoinc-fix').autoIncrement

const ClientSchema = new Schema({
    clientId: String,
    gender: {
        type: String,
        enum : ['M','F'],
        default: 'M'
    },
    birthdate: Date,
    firstconsultdate: Date,
    occupation: String,
    paindurations: Number,
    armupliftangle: Number,
    painlocations: [{
        type: Schema.Types.ObjectId, ref: 'PainLocations'
    }],
    painconsequences: [{
        type: Schema.Types.ObjectId, ref: 'PainConsequences'
    }],
    paincause: {
        type: Schema.Types.ObjectId,
        ref: 'PainCauses'
    },
    paincategory: {
        type: Schema.Types.ObjectId,
        ref: 'PainCategories'
    },
    QE_positions: [{
        type: Schema.Types.ObjectId, ref: 'AcuPoints'
    }],
    BEM_positions: [{
        type: Schema.Types.ObjectId, ref: 'AcuPoints'
    }]
})

const Client = mongoose.model('Client', ClientSchema, 'Clients')

module.exports = Client

