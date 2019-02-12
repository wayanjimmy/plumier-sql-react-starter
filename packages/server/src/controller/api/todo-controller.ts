import { val, route } from "plumier"
import { Todo } from "core"

import { Repository } from "../../repository/generic-repository"

export class TodoController {
    private readonly repo = new Repository<Todo>("Todo")

    @route.get("")
    all(@val.optional() offset:number = 0, @val.optional() limit:number = 50) {
        return this.repo.find({ deleted: false }, offset, limit)
    }

    @route.get(":id")
    get(id: number) {
        return this.repo.findById(id)
    }

    @route.post("")
    save(data: Todo) {
        return this.repo.add(data)
    }

    @route.put(":id")
    update(id: number, @val.partial(Todo) data: Partial<Todo>) {
        return this.repo.update(id, data)
    }

    @route.delete(":id")
    delete(id: number) {
        return this.repo.delete(id)
    }
}