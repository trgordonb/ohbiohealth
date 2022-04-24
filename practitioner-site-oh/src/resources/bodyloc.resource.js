const BodyLocResource = {
    properties: {
        bodyloc_id: {
            isVisible: false
        },
        bodyloc_zh: {
            isTitle: true
        },
        bodyloc_en: {
            isVisible: true,
            position: 10
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
        },
        list: {
            isAccessible: true
        },
        delete: {
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin',
        },
        bulkDelete: {
            isAccessible: false
        },
        edit: {
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin',
        },
        show: {
            isAccessible: true
        },
    }
}

module.exports = BodyLocResource