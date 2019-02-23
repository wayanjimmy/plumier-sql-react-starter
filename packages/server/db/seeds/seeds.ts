import * as Knex from "knex";
import { User } from "core";
import bcrypt from "bcrypt"

export function seed(knex: Knex): Promise<any> {
    async function addIfNotExists<T>(table: string, criteria: Partial<T>, data: Partial<T> | (() => Promise<Partial<T>>)) {
        const promised = typeof data === "function" ? await data() : data
        const exists = await knex(table).where(criteria).first()
        if (!exists)
            return knex(table).insert(promised)
    }

    return Promise.all([
        //add seeds here
        addIfNotExists<User>("User", { email: "admin@todo.app" }, async () => ({
            email: "admin@todo.app",
            displayName: "Admin",
            password: await bcrypt.hash("123456", 10)
        }))
    ])
}
