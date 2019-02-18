import React, { Component } from "react";
import { Router } from "@reach/router";

import TodoList from "./todo-list";
import UserList from "./user-list";
import Login from "./login";

class Root extends Component {
    render() {
        return (
            <Router>
                <TodoList path="/" />
                <Login path="/login" />
                <UserList path="/users" />
            </Router>
        );
    }
}

export default Root;
