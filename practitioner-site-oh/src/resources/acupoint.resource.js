const AcupointResource = {
    properties: {
        acupt_id: {
            isVisible: false
        },
        acupt_zh: {
            isTitle: true
        },
        acupt_en: {
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

module.exports = AcupointResource