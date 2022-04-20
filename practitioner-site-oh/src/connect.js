/* eslint-disable no-console */
const Sequelize = require('sequelize')
const buildUser = require('./models/users.model')

const connect = async () => {
    const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
        dialectOptions: {
          // Your mysql2 options here
        }
    })

    const User = buildUser(sequelize)
    await sequelize.sync({ force: true })

    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }

    return sequelize
}

module.exports = connect
