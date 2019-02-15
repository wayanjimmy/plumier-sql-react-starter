import { UserRepository } from "../repository/generic-repository";
import { ValidatorStore } from "@plumier/core";

export const validatorStore: ValidatorStore = {
    "val:unique-email": async val => {
        const repository = new UserRepository()
        const user = await repository.findByEmail(val)
        return user ? "User with the same email already exists" : undefined
    }
}