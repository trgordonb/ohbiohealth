const EntityResource = {
    properties: {
        entity_id: {
            isVisible: false,
            position: 1
        },
        branch_id: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 2
        },
        entityName: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 3,
            isTitle: true
        },
        gender: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 4
        },
        birthyear: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 5
        },
        occupation: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 6
        },
        createdAt: {
            isVisible: false
        },
        updatedAt: {
            isVisible: false
        },
        enteredBy: {
            isVisible: {
                list: false, filter: false, show: false, edit: false
            }
        }
    },
    actions: {
        new: {
            before: async(request, context) => {
                const { currentAdmin } = context
                request.payload = {
                    ...request.payload,
                    enteredBy: currentAdmin.userId
                }
                return request
            },
            showInDrawer: true
        },
        list: {
            before: async (request, context) => {
                const { currentAdmin } = context
                if (currentAdmin.role !== 'admin') {
                    return {
                        ...request,
                        query: {
                           ...request.query,
                           'filters.enteredBy' : currentAdmin.userId
                        }
                    }
                } else {
                    return request
                }           
            },
        },
        edit: {
            showInDrawer: true
        },
        show: {
            showInDrawer: true
        }
    }
}

module.exports = EntityResource