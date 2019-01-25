import { Todo } from "core"
import { route } from "@plumjs/core";
import { Repository } from "../../repository/generic-repository";
import reflect from "tinspector"

export class TodoController {
    repo = new Repository<Todo>("todo")

    all() {
        return this.repo.find({ deleted: false }, 0, 100)
    }

    @route.post("")
    save(data: Todo) {
        return this.repo.add(data)
    }

    @route.put(":id")
    update(id: number, @reflect.type(Todo) data: Partial<Todo>) {
        return this.repo.update(id, data)
    }

    @route.delete(":id")
    delete(id: number) {
        return this.repo.delete(id)
    }
}