import React, { Component } from "react";
import { Router } from "@reach/router";

import TodoList from "./TodoList";
import Login from "./Login";

class Root extends Component {
    render() {
        return (
            <Router>
                <TodoList path="/" />
                <Login path="/login" />
            </Router>
        );
    }
}

export default Root;
