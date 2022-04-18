const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'cms-postgres-srv'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ensemble'),
      user: env('DATABASE_USERNAME', 'ensemble'),
      password: env('DATABASE_PASSWORD', '123456'),
      ssl: false
    },
    debug: false
  },
});
