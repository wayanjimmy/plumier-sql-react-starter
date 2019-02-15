import { ValidatorStore } from "plumier"

import { UserRepository } from "../repository/generic-repository"

export const validatorStore: ValidatorStore = {
    "val:unique-email": async val => {
        const repository = new UserRepository()
        const user = await repository.findByEmail(val)
        return user ? "User with the same email already exists" : undefined
    }
}