module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'), // cluster0.jmnaw.mongodb.net
        srv: env.bool('DATABASE_SRV', false), // true
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'demo-app2'), // any name
        username: env('DATABASE_USERNAME', null), // admin2
        password: env('DATABASE_PASSWORD', null), // admin2
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', false), // true
      },
    },
  },
});
