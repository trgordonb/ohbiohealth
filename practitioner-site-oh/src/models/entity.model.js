const { DataTypes } = require('sequelize');
const natsWrapper = require('../nats-wrapper')
const EntitySavedPublisher = require('../events/publishers/entity-saved-publisher')

const buildEntity = (sequelize) => {
    const Entity = sequelize.define('Entity', {
        entity_id : {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        branch_id: {
          type: DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'tbl_branch'
            },
            key: 'branch_id'
          },
        },
        gender: {
          type: DataTypes.ENUM('M','F'),
          allowNull: false
        },
        birthyear: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        occupation: {
          type: DataTypes.STRING(45),
          allowNull: false
        },
        enteredBy: {
          type: DataTypes.UUID,
        }
    }, {
        tableName: 'tbl_entity',
        modelName: 'Entity',
        hooks: {
          afterCreate: async (entity, options) => {
            await new EntitySavedPublisher(natsWrapper.client).publish(entity.dataValues)
          },
          afterUpdate: async (entity, options) => {
            await new EntitySavedPublisher(natsWrapper.client).publish(entity.dataValues)
          }
        }
    })
    
    return Entity
}

module.exports = buildEntity