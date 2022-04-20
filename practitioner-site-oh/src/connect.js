/* eslint-disable no-console */
const Sequelize = require('sequelize')
const buildUser = require('./models/users.model')

const connect = async () => {
    const sequelize = new Sequelize('oh', 'ensemble', 'Hereftrr2022', {
        host: 'dataadmin-oh-mysql-srv',
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
