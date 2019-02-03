import * as Knex from "knex";
import { baseTable } from "./v1.0.0_initial";

export async function up(knex: Knex): Promise<any> {
    return knex.transaction(trx => {
        return trx.schema
            .createTable("User", t => {
                baseTable(t, trx)
                t.string("email", 64)
                t.string("displayName", 64)
                t.string("password", 128)
                t.string("provider", 10)
                t.string("role", 10)
            })
            //add association to user
            //add visibility column
            .alterTable("Todo", t => {
                t.bigInteger("userId").unsigned().references("id").inTable("User")
                t.string("visibility", 10)
            })
            //add default value Public to visibility column
            .then(x => trx("Todo").update({ visibility: "Public" }))
    })
};

export async function down(knex: Knex): Promise<any> {
    return knex.transaction(trx => {
        return trx.schema
            //delete foreign key and userid column
            //delete visibility column
            .alterTable("Todo", t => {
                t.dropForeign(["userId"])
                t.dropColumn("userId")
                t.dropColumn("visibility")
            })
            .dropTable("User")
    })
};