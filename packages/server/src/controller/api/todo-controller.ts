import { route, val, bind, HttpStatusError } from "plumier"
import { authorize,  } from "@plumier/core"
import { Todo, LoginUser } from "core"

import { Repository, TodoRepository } from "../../repository/generic-repository";

export class TodoController {
    private readonly repo = new TodoRepository();

    @route.ignore()
    private async checkAccess(id: number, user: LoginUser) {
        //make sure user only can access their own todos
        //except super admin
        const request = await this.repo.findById(id);
        if (request && user.role === "User" && user.userId !== request.userId)
            throw new HttpStatusError(401, "Unauthorized");
    }

    @authorize.public()
    @route.get("")
    all(
        @val.optional() @bind.user() user?: LoginUser,
        @val.optional() offset: number = 0,
        @val.optional() limit: number = 50
    ) {
        return this.repo.findByUser(user && user.userId, offset, limit);
    }

    @route.get(":id")
    get(id: number) {
        return this.repo.findById(id);
    }

    @route.post("")
    save(data: Todo, @bind.user() user: LoginUser) {
        return this.repo.add({ ...data, userId: user.userId });
    }

    @route.put(":id")
    async update(id: number, @val.partial(Todo) data: Partial<Todo>, @bind.user() user: LoginUser) {
        this.checkAccess(id, user);
        return this.repo.update(id, data);
    }

    @route.delete(":id")
    delete(id: number, @bind.user() user: LoginUser) {
        this.checkAccess(id, user);
        return this.repo.delete(id);
    }
}
