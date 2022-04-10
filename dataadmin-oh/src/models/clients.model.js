const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PainCause = require('./paincauses.model')
const PainCategory = require('./paincategories.model')
const PainLocations = require('./painlocation.model')
const PainConsequences = require('./painconsequences.model')
const AcuPoints = require('./acupoints.model')
const PatientProfileSavedPublisher = require('../events/publishers/patientprofile-saved-publisher')
const natsWrapper = require('../nats-wrapper')

const ClientSchema = new Schema({
    _id: String,
    gender: {
        type: String,
        enum : ['male','female'],
        default: 'male'
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
}, {
    _id: false
})

ClientSchema.post('save', async function(doc, next) {
    await doc.populate('paincategory')
    await doc.populate('paincause')
    await doc.populate('painlocations')
    await doc.populate('painconsequences')
    await doc.populate('QE_positions')
    await doc.populate('BEM_positions')
    let result = JSON.parse(JSON.stringify(doc))
    delete result.__v
    result.groupId = 'oh'
    result.paincategory = doc.paincategory.en_name ? doc.paincategory.en_name : ''
    result.paincause = doc.paincause.en_name ? doc.paincause.en_name : ''
    result.painlocations = doc.painlocations.length === 0 ? [] : doc.painlocations.map(item => (item.en_name))
    result.painconsequences = doc.painconsequences.length === 0 ? [] : doc.painconsequences.map(item => (item.en_name))
    result.QE_positions = doc.QE_positions.length === 0 ? [] : doc.QE_positions.map(item => (item.en_name))
    result.BEM_positions = doc.BEM_positions.length === 0 ? [] : doc.BEM_positions.map(item => (item.en_name))
    await new PatientProfileSavedPublisher(natsWrapper.client).publish(result)
    next()
})

ClientSchema.post('findOneAndUpdate', async function() {
    let doc = this._update.$set
    delete doc.__v
    if (doc.paincause) {
        let cause = await PainCause.findById(doc.paincause)
        doc.paincause = cause.en_name
    }
    if (doc.paincategory) {
        let category = await PainCategory.findById(doc.paincategory)
        doc.paincategory = category.en_name
    }
    if (doc.painlocations && doc.painlocations.length > 0) {
        let newPainLocations = []
        await Promise.all(doc.painlocations.map(async (item) => {
            let location = await PainLocations.findById(item)
            newPainLocations.push(location.en_name)
        }))
        doc.painlocations = newPainLocations
    }
    if (doc.painconsequences && doc.painconsequences.length > 0) {
        let newPainConsequences = []
        await Promise.all(doc.painconsequences.map(async (item) => {
            let consequence = await PainConsequences.findById(item)
            newPainConsequences.push(consequence.en_name)
        }))
        doc.painconsequences = newPainConsequences
    }
    if (doc.QE_positions && doc.QE_positions.length > 0) {
        let newPositions = []
        await Promise.all(doc.QE_positions.map(async (item) => {
            let position = await AcuPoints.findById(item)
            newPositions.push(position.en_name)
        }))
        doc.QE_positions = newPositions
    }
    if (doc.BEM_positions && doc.BEM_positions.length > 0) {
        let newPositions = []
        await Promise.all(doc.BEM_positions.map(async (item) => {
            let position = await AcuPoints.findById(item)
            newPositions.push(position.en_name)
        }))
        doc.BEM_positions = newPositions
    }
    await new PatientProfileSavedPublisher(natsWrapper.client).publish(doc)
})

const Client = mongoose.model('Client', ClientSchema, 'Clients')

module.exports = Client

