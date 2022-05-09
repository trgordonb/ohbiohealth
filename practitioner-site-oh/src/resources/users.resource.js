const bcrypt = require('bcrypt')

const UserResource = {
    properties: {
        encryptedPassword: {
            isVisible: false
        },
        password: {
            type: 'password',
            isVisible: {
                list: false, edit: true, filter: false, show: false,
            }
        },
        userId: {
            isVisible: false
        },
        createdAt: {
            isVisible: false
        },
        updatedAt: {
            isVisible: false
        }
    },
    actions: {
        new: {
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin',
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
        list: {
            isAccessible: true
        },
        delete: {
            isAccessible: ({ currentAdmin, record }) => {
                return currentAdmin && (
                    currentAdmin.role === 'admin'
                    || currentAdmin.userId === record.params.userId
                )
            },
        },
        bulkDelete: {
            isAccessible: false
        },
        edit: {
            isAccessible: ({ currentAdmin, record }) => {
                return currentAdmin && (
                    currentAdmin.role === 'admin'
                    || currentAdmin.userId === record.params.userId
                )
            },
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