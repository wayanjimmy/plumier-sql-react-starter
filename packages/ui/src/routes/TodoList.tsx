import React, { Component } from "react";
import { Column, List, Checkbox, Input } from "rbx";
import { Todo } from "core";
import axios from "axios";

import Layout from "../components/Layout";
import { FormEvent } from "react";

type Props = {
    path: string;
};

type State = {
    title: string;
    todos: Todo[];
};

class TodoList extends Component<Props, State> {
    state = {
        title: "",
        todos: []
    };

    fetch = async () => {
        try {
            let res = await axios.get<Todo[]>("/api/todo");
            this.setState({ todos: res.data });
        } catch (_error) {}
    };

    componentDidMount() {
        this.fetch();
    }

    handleTitleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ title: e.currentTarget.value });
    };

    handleSaveTodo = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            let { title } = this.state;
            await axios.post("/api/todo", { title });
            this.setState({ title: "" }, this.fetch);
        }
    };

    handleCheckTodo = (todo: Todo) => (e: FormEvent<HTMLInputElement>): void => {
        let todos = this.state.todos.map((t: Todo) => {
            if (t.id === todo.id) {
                return {
                    ...todo,
                    completed: e.currentTarget.checked
                };
            }
            return t;
        });
        this.setState({ todos });
    };

    render() {
        let { todos, title } = this.state;

        return (
            <Layout>
                <Column.Group centered>
                    <Column size="half">
                        <List>
                            <List.Item>
                                <Input
                                    type="text"
                                    value={title}
                                    placeholder="Something todo? type here ..."
                                    onChange={this.handleTitleChange}
                                    onKeyPress={this.handleSaveTodo}
                                />
                            </List.Item>
                            {todos.map((todo: Todo) => (
                                <List.Item key={todo.id}>
                                    <Checkbox checked={todo.completed} onChange={this.handleCheckTodo(todo)} />{" "}
                                    {todo.title}
                                </List.Item>
                            ))}
                        </List>
                    </Column>
                </Column.Group>
            </Layout>
        );
    }
}

export default TodoList;
