const EntityResource = {
    properties: {
        entity_id: {
            isVisible: { list: true, filter: true, show: true, edit: false },
            position: 1
        },
        branch_id: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 2
        },
        gender: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 3
        },
        birthyear: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 4
        },
        occupation: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            position: 5
        },
        createdAt: {
            isVisible: false
        },
        updatedAt: {
            isVisible: false
        },
        enteredBy: {
            isVisible: {
                list: false, filter: true, show: false, edit: false
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
            }
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
            }
        }
    }
}

module.exports = EntityResource