import React, { Component } from "react";
import { Router } from "@reach/router";

import TodoList from "./TodoList";
import UserList from "./UserList";
import Login from "./Login";

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
