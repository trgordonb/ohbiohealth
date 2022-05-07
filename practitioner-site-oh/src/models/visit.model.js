const { DataTypes } = require('sequelize');
const natsWrapper = require('../nats-wrapper')
const VisitSavedPublisher = require('../events/publishers/visit-saved-publisher')

const buildVisit = (sequelize) => {
    const Visit = sequelize.define('Visit', {
        entity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: 'tbl_entity'
                },
                key: 'entity_id'
            }
        },
        branch_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: {
                    tableName: 'tbl_branch'
                },
                key: 'branch_id'
            }
        },
        date: {
            type: DataTypes.DATE,
            primaryKey: true,
            defaultValue: DataTypes.NOW
        },
        duration: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        symptom_loc1: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'tbl_bodyloc'
                },
                key: 'bodyloc_id'
            }
        },
        symptom_loc2: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'tbl_bodyloc'
                },
                key: 'bodyloc_id'
            }
        },
        symptom_cause: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'tbl_cause'
                },
                key: 'cause_id'
            }
        },
        symptom_consq: {
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'tbl_consq'
                },
                key: 'consq_id'
            }
        },
        symptom_raise: {
            type: DataTypes.INTEGER
        },
        remark: {
            type: DataTypes.TEXT
        },
        enteredBy: {
            type: DataTypes.UUID,
        }
    }, {
        tableName: 'tbl_visit',
        modelName: 'Visit',
        hooks: {
            afterCreate: async (visit, options) => {
              await new VisitSavedPublisher(natsWrapper.client).publish(visit.dataValues)
            },
            afterUpdate: async (visit, options) => {
              await new VisitSavedPublisher(natsWrapper.client).publish(visit.dataValues)
            }
        }
    })
    
    return Visit
}

module.exports = buildVisit