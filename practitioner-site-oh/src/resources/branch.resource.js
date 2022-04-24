const BranchResource = {
    properties: {
        description: {
            isTitle: true
        },
        branch_id: {
            isVisible: true,
            position: 2
        },
        createdAt: {
            isVisible: false
        },
        updatedAt: {
            isVisible: false
        }
    }
}

module.exports = BranchResource