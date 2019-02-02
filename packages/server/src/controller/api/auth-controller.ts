import { authorize, route, HttpStatusError } from "@plumjs/core"
import { val } from "@plumjs/plumier"
import bcrypt from "bcrypt"
import { LoginUser } from "core"
import { sign } from "jsonwebtoken"

import { config } from "../../config"
import { UserRepository } from "../../repository/generic-repository"

export class AuthController {
    private readonly userRepo = new UserRepository()

    @authorize.public()
    @route.post()
    async login(@val.email() email: string, password: string) {
        const user = await this.userRepo.findByEmail(email)
        if (user && await bcrypt.compare(password, user.password)) {
            return { token: sign(<LoginUser>{ userId: user.id, role: user.role }, config.jwtSecret) }
        }
        else
            throw new HttpStatusError(403, "Invalid username or password")
    }
}