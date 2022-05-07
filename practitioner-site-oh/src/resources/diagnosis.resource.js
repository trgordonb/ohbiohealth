const DiagnosisResource = {
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
                list: true, filter: false, show: true, edit: false
            },
            type: 'date',
            position: 3
        },
        category: {
            isVisible: {
                list: true, filter: true, show: true, edit: true
            },
            position: 4
        },
        apply_minute: {
            isVisible: {
                list: true, filter: false, show: true, edit: true
            },
            position: 5
        },
        qe_acupt_1: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 6
        },
        qe_acupt_2: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 7
        },
        qe_acupt_3: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 8
        },
        bem_acupt_1: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 9
        },
        bem_acupt_2: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 10
        },
        bem_acupt_3: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 11
        },
        bem_acupt_4: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 12
        },
        bem_acupt_5: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 13
        },
        bem_acupt_6: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 14
        },
        bem_acupt_7: {
            isVisible: {
                list: false, filter: true, show: true, edit: true
            },
            position: 15
        },
        remark: {
            isVisible: {
                list: false, filter: false, show: true, edit: true
            },
            position: 16,
            type: 'textarea',
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
            }
        },
        edit: {
            showInDrawer: true
        },
        show: {
            showInDrawer: true
        }
    }
}

module.exports = DiagnosisResource