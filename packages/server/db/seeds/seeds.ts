import * as Knex from "knex";

export function seed(knex: Knex): Promise<any> {
    async function addIfNotExists<T>(table: string, criteria: Partial<T>, user: Partial<T>) {
        const exists = await knex(table).where(criteria).first()
        if (!exists)
            return knex(table).insert(user)
    }

    return Promise.all([
        //add seeds here
    ])
}
