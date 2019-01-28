import * as Knex from "knex";

/**
 * This function used to create table that based on DomainBase 
 * that described on core/src/domain.ts
 */
function baseTable(t: Knex.CreateTableBuilder, knex: Knex) {
    t.bigIncrements("id")
    t.timestamp("createdAt").defaultTo(knex.fn.now())
    t.boolean("deleted").defaultTo(false)
}

export async function up(knex: Knex): Promise<any> {
    return knex.schema
        .createTable("Todo", t => {
            baseTable(t, knex)
            t.string("title", 64)
            t.boolean("completed").defaultTo(false)
        })
};

export async function down(knex: Knex): Promise<any> {
    return knex.schema
        .dropTable("Todo")
};