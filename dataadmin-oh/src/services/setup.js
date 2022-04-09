const UserModel = require('../models/users.model')
const bcrypt = require('bcrypt')

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

module.exports = addAdmin