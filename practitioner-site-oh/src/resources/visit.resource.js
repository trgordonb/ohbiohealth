const VisitResource = {
    properties: {
        entity_id: {
            isVisible: {
                list: true, filter: true, show: true, edit: true
            },
            position: 1
        },
        branch_id: {
            isVisible: {
                list: true, filter: true, show: true, edit: true
            },
            position: 2
        },
        date: {
            isVisible: {
                list: false, filter: false, show: true, edit: false
            },
            position: 3
        },
        duration: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 4
        },
        symptom_loc1: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 5
        },
        symptom_loc2: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 6
        },
        symptom_cause: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            }, 
            position: 7
        },
        symptom_consq: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 8
        },
        symptom_raise: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 9
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

module.exports = VisitResource