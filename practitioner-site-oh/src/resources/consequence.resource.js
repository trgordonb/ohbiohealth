const ConsequenceResource = {
    properties: {
        consq_id: {
            isVisible: false
        },
        consq_zh: {
            isTitle: true
        },
        consq_en: {
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
            isAccessible: false
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

module.exports = ConsequenceResource