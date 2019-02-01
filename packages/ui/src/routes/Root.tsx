import React, { Component } from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Login from "./Login";

class Root extends Component {
    render() {
        return (
            <Router>
                <Home path="/" />
                <Login path="/login" />
            </Router>
        );
    }
}

export default Root;
