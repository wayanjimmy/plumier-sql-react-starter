import { Config } from "knex"
import { config } from "./src/config";

export const defaultConfiguration: Config = {
    //TODO: change value based on database driver you used
    //client: 'mysql2',
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
    development: { ...defaultConfiguration },
    production: { ...defaultConfiguration }
}