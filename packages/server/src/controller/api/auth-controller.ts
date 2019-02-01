import { val } from "@plumjs/plumier";
import { Repository, UserRepository } from "../../repository/generic-repository";
import { User, UserClaim } from "core";
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"
import { config } from "../../config";
import { authorize } from "@plumjs/core";

export class AuthController {
    private readonly userRepo = new UserRepository()

    @authorize.public()
    async login(@val.email() email: string, password: string) {
        const user = await this.userRepo.findByEmail(email)
        const hash = await bcrypt.hash(password, 10)
        if (user && user.password === hash) {
            return sign(new UserClaim(user.id, user.role), config.jwtSecret)
        }
    }
}