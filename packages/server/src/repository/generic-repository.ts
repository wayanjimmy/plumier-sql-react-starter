import { db } from "./db";
import { DomainBase } from "core";

/**
 * This generic repository used to do CRUD for domain that 
 * extends DomainBase described in core/src/domain.ts
 */
export class Repository<T extends DomainBase> {
    constructor(protected table: string) { }

    async findById(id: number, projection: string[] = ["*"]): Promise<T | undefined> {
        return db(this.table).select(projection).where({ id }).first()
    }

    async findOne(query: Partial<T>, projection: string[] = ["*"]): Promise<T | undefined> {
        return db(this.table).select(projection).where(query).first()
    }

    async find(query: Partial<T>, offset: number = 0, limit: number = 50): Promise<T[]> {
        return db(this.table).where(query)
            .orderBy("createdAt", "desc")
            .offset(offset)
            .limit(limit)
    }

    async add(data: Partial<T>): Promise<number> {
        const result = await db(this.table).insert(data)
        return result[0]
    }

    async update(id: number, data: Partial<T>): Promise<number> {
        return db(this.table).update(data).where({ id })
    }

    async delete(id: number, persist: boolean = false) {
        if (!persist)
            return db(this.table).update(<DomainBase>{ deleted: true }).where({ id })
        else
            return db(this.table).delete().where({ id })
    }
}