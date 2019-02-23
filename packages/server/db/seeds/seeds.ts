import * as Knex from "knex";

export function seed(knex: Knex): Promise<any> {
    async function addIfNotExists<T>(table: string, criteria: Partial<T>, data: Partial<T> | (() => Promise<Partial<T>>)) {
        const promised = typeof data === "function" ? await data() : data
        const exists = await knex(table).where(criteria).first()
        if (!exists)
            return knex(table).insert(promised)
    }

    return Promise.all([
        //add seeds here
    ])
}
