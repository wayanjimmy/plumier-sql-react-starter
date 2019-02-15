import knex from "knex"
import { defaultConfiguration } from "../../knexfile";

export const db = knex(defaultConfiguration)