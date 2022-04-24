module.exports = {
    development: {
        dialect: 'mysql',
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST,
        port: 3306,
        database: process.env.MYSQL_DB,
    },
    production: {
        dialect: 'mysql',
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        host: process.env.MYSQL_HOST,
        port: 3306,
        database: process.env.MYSQL_DB,
    }
}