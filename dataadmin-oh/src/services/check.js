const UserModel = require('../models/users.model')
const PainLocations = require('../models/painlocation.model')

const adminExists = () => {
    return new Promise(async (resolve, reject) => {
        const existingAdmin = await UserModel.findOne({role: "admin"});
        if (existingAdmin) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
}

const staticDataExists = () => {
    return new Promise(async (resolve, reject) => {
        const existingStaticData = await PainLocations.find({})
        if (existingStaticData && existingStaticData.length > 0) {
            resolve(true)
        } else {
            resolve(false)
        }
    })
}

module.exports = { adminExists, staticDataExists }