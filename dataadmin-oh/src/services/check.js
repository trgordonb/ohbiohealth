const UserModel = require('../models/users.model')

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

module.exports = adminExists