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
        public id = 0,
        @val.optional()
        public createdAt = new Date(),
        @val.optional()
        public deleted = false
    ) { }
}
