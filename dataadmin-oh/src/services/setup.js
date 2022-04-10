const UserModel = require('../models/users.model')
const AcuPoints = require('../models/acupoints.model')
const PainCategories = require('../models/paincategories.model')
const PainCauses = require('../models/paincauses.model')
const PainLocations = require('../models/painlocation.model')
const PainConsequences = require('../models/painconsequences.model')
const path = require('path')
const bcrypt = require('bcrypt')
const csv = require('csvtojson')

const addAdmin = async (id) => {
    const encryptedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10)
    const user = new UserModel({
        _id: id,
        email: 'admin@ohbiohealth.com',
        groupId: 'oh',
        role: 'admin',
        encryptedPassword: encryptedPassword
    })

    await user.save();
}

const addStaticData = async () => {
    let filePath = path.join(__dirname, 'acupoints.csv')
    csv().fromFile(filePath)
    .then(async (items) => {
        await Promise.all(items.map(async (item) => {
            let acuPoint = new AcuPoints(item)
            await acuPoint.save()
        }))
    })
    filePath = path.join(__dirname, 'paincategories.csv')
    csv().fromFile(filePath)
    .then(async (items) => {
        await Promise.all(items.map(async (item) => {
            let category = new PainCategories(item)
            await category.save()
        }))
    })
    filePath = path.join(__dirname, 'paincauses.csv')
    csv().fromFile(filePath)
    .then(async (items) => {
        await Promise.all(items.map(async (item) => {
            let cause = new PainCauses(item)
            await cause.save()
        }))
    })
    filePath = path.join(__dirname, 'painlocations.csv')
    csv().fromFile(filePath)
    .then(async (items) => {
        await Promise.all(items.map(async (item) => {
            let location = new PainLocations(item)
            await location.save()
        }))
    })
    filePath = path.join(__dirname, 'painconsequences.csv')
    csv().fromFile(filePath)
    .then(async (items) => {
        await Promise.all(items.map(async (item) => {
            let consequence = new PainConsequences(item)
            await consequence.save()
        }))
    })
}

module.exports = { addAdmin, addStaticData }