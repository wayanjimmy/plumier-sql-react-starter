import * as Knex from "knex";
import { baseTable } from "./v1.0.0_initial";

export async function up(knex: Knex): Promise<any> {
    return knex.schema
        .createTable("User", t => {
            baseTable(t, knex)
            t.string("email", 64)
            t.string("displayName", 64)
            t.string("password", 128)
            t.string("provider", 10)
            t.string("role", 10)
        })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema
        .dropTable("User")
};