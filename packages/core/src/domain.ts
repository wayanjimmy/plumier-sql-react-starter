import { domain, val } from "plumier";
import { uniqueEmail } from "./business";
import { authorize } from "@plumier/core";

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
        @authorize.role("Machine")
        @val.optional()
        public id: number = 0,
        @authorize.role("Machine")
        @val.optional()
        public createdAt: Date = new Date(),
        @authorize.role("Machine")
        @val.optional()
        public deleted: boolean = false
    ) {}
}

@domain()
export class Todo extends DomainBase {
    constructor(
        @val.length({ max: 64 })
        public title: string,
        @val.length({ max: 10 })
        public visibility: "Public" | "Private",
        @authorize.role("Machine")
        public userId?: number,
        @val.optional()
        public completed?: boolean
    ) {
        super();
    }
}

export type UserRole = "Admin" | "User";

@domain()
export class User extends DomainBase {
    constructor(
        @val.email()
        @uniqueEmail()
        public email: string,
        @val.length({ max: 64 })
        public displayName: string,
        @val.length({ max: 64 })
        public password: string,
        @authorize.role("Machine")
        @val.length({ max: 10 })
        public provider: "Local" | "Facebook" | "Google",
        @authorize.role("Admin")
        @val.length({ max: 10 })
        public role: UserRole
    ) {
        super();
    }
}

@domain()
export class LoginUser {
    constructor(public userId: number, public role: UserRole) {}
}
