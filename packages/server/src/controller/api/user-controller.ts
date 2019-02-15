import bcrypt from "bcrypt"
import { User } from "core"
import { authorize, route, val } from "plumier"

import { Repository } from "../../repository/generic-repository"

export class UserController {
    private readonly repo = new Repository<User>("User")

    @authorize.role("Admin", "SuperAdmin")
    @route.get("")
    all(@val.optional() offset: number = 0, @val.optional() limit: number = 50) {
        return this.repo.find({ deleted: false }, offset, limit)
    }

    @route.get(":id")
    get(id: number) {
        return this.repo.findById(id)
    }

    @authorize.public()
    @route.post("")
    async save(data: User) {
        return this.repo.add({ 
            ...data, 
            password: await bcrypt.hash(data.password, 10),
            provider: "Local",
            role: "User"
        })
    }

    @authorize.role("Admin")
    @route.put(":id")
    update(id: number, @val.partial(User) data: Partial<User>) {
        return this.repo.update(id, data)
    }

    @authorize.role("Admin")
    @route.delete(":id")
    delete(id: number) {
        return this.repo.delete(id)
    }
}