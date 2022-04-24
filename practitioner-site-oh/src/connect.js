/* eslint-disable no-console */
const Sequelize = require('sequelize')
const buildUser = require('./models/users.model')
const buildBranch = require('./models/branch.model')
const buildBodyLoc = require('./models/bodyloc.model')
const buildCause = require('./models/cause.model')
const buildConsequence = require('./models/consequence.model')
const buildCategory = require('./models/category.model')
const buildAcupoint = require('./models/acupoint.model')
const buildEntity = require('./models/entity.model')
const buildVisit = require('./models/visit.model')
const buildDiagnosis = require('./models/diagnosis.model')

const connect = async () => {
    const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        dialectOptions: {
            charset: 'utf8mb4'
        }
    })

    const Branch = buildBranch(sequelize)
    const User = buildUser(sequelize)
    const Entity = buildEntity(sequelize)
    const BodyLoc = buildBodyLoc(sequelize)
    const Cause = buildCause(sequelize)
    const Consequence = buildConsequence(sequelize)
    const Category = buildCategory(sequelize)
    const Acupoint = buildAcupoint(sequelize)
    const Visit = buildVisit(sequelize)
    const Diagnosis = buildDiagnosis(sequelize)

    await Branch.sync({ alter: true })
    await User.sync()
    await Entity.sync()
    await BodyLoc.sync({ alter: true })
    await Cause.sync({ alter: true })
    await Consequence.sync({ alter: true })
    await Category.sync({ alter: true })
    await Acupoint.sync({ alter: true })
    await Visit.sync()
    await Diagnosis.sync()

    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }

    return sequelize
}

module.exports = connect
