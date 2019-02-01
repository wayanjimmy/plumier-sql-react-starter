import { domain } from "@plumjs/core"
import { val } from "@plumjs/validator"
import reflect from "tinspector"

/**
 * This is the super class for all domains. It has id, createdAt and deleted 
 * this super class prevent us re-declaring those field on every domains. 
 * 
 * Refer to server/src/repository/generic-repository.ts for generic repository 
 * that supports this DomainBase
 * 
 * Also refer to server/db/migrations/v1.0.0_initial.ts for migrating all domain 
 * with support DomainBase
 */
@domain()
export class DomainBase {
    constructor(
        @val.optional()
        public id: number = 0,
        @val.optional()
        public createdAt: Date = new Date(),
        @val.optional()
        public deleted: boolean = false
    ) { }
}


@domain()
export class Todo extends DomainBase {
    constructor(
        @val.length({ max: 64 })
        public title: string,
        @val.optional()
        public completed?: boolean
    ) { super() }
}

export type UserRole = "SuperAdmin" | "Admin" | "User";

@domain()
export class User extends DomainBase {
    constructor(
        @val.email()
        public email: string,
        @val.length({ max: 64 })
        public displayName: string,
        @val.length({ max: 64 })
        public password: string,
        @val.length({ max: 10 })
        public provider: "Local" | "Facebook" | "Google",
        @val.length({ max: 10 })
        public role: UserRole
    ) { super() }
}

@domain()
export class UserClaim {
    constructor(
        userId: number,
        role: UserRole
    ) { }
}