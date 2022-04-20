const bcrypt = require('bcrypt')
const axios = require('axios')

const UserResource = {
    //parent: menu.painProfileMaster,
    properties: {
        id: {
            isVisible: { list: true, filter: false, show: true, edit: false },
        },
        encryptedPassword: {
            isVisible: false
        },
        password: {
            type: 'string',
            isVisible: {
                list: false, edit: true, filter: false, show: false,
            }
        }
    },
    actions: {
        new: {
            //isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin',
            before: async(request) => {
                if (request.payload) {
                    const response = await axios.post(process.env.IDENTITY_SERVICE_URL, {
                        groupId: 'oh'
                    })
                    request.payload = {
                        ...request.payload,
                        entityId: response.data.sequence,
                    }
                }
                if (request.payload.password) {
                    request.payload = {
                        ...request.payload,
                        encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                        password: undefined
                    }
                }
                return request
            }
        },
        list: {
            isAccessible: true
        },
        delete: {
            //isAccessible: ({ currentAdmin, record }) => {
            //    return currentAdmin && (
            //        currentAdmin.role === 'admin'
            //        || currentAdmin.id === record.params._id
            //    )
            //},
        },
        edit: {
            //isAccessible: ({ currentAdmin, record }) => {
            //    return currentAdmin && (
            //        currentAdmin.role === 'admin'
            //        || currentAdmin.id === record.params._id
            //    )
            //},
            before: async(request) => {    
                if (request.payload.password) {
                    request.payload = {
                        ...request.payload,
                        encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                        password: undefined
                    }
                }
                return request
            }
        },
        show: {
            isAccessible: true
        },
    }
}

module.exports = UserResource