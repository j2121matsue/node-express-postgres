// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'todo_app',
      user:     'root',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds',
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'todo_app',
      user:     'root',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds',
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'todo_app',
      user:     'root',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds',
    }
  }

};