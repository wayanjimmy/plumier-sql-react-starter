import { Config } from "knex"
import { config } from "./src/config";

const development: Config = {
    client: 'pg',
    connection: config.dbUri,
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: '_knex_migrations',
        directory: "./db/migrations"
    },
    seeds: {
        directory: "./db/seeds"
    }
}

module.exports = {
    development,
    production: { ...development }
}