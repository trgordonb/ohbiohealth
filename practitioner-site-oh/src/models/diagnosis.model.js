const { DataTypes } = require('sequelize');
const natsWrapper = require('../nats-wrapper')
const DiagnosisSavedPublisher = require('../events/publishers/diagnosis-saved-publisher')

const buildDiagnosis = (sequelize) => {
    const Diagnosis = sequelize.define('Diagnosis', {
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
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: 'tbl_cat'
              },
              key: 'cat_id'
            }
        },
        apply_minute: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        qe_acupt_1: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        qe_acupt_2: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        qe_acupt_3: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        bem_acupt_1: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        bem_acupt_2: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        bem_acupt_3: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        bem_acupt_4: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        bem_acupt_5: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        bem_acupt_6: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        bem_acupt_7: {
            type: DataTypes.STRING(10),
            references: {
              model: {
                tableName: 'tbl_acupt'
              },
              key: 'acupt_id'
            },
        },
        enteredBy: {
          type: DataTypes.UUID,
        }
    }, {
        tableName: 'tbl_visit_diag',
        modelName: 'Diagnosis',
        hooks: {
          afterCreate: async (diagnosis, options) => {
            await new DiagnosisSavedPublisher(natsWrapper.client).publish(diagnosis.dataValues)
          },
          afterUpdate: async (diagnosis, options) => {
            await new DiagnosisSavedPublisher(natsWrapper.client).publish(diagnosis.dataValues)
          }
        }
    })
    
    return Diagnosis
}

module.exports = buildDiagnosis