import React, { Component } from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";

import Login from "./Login";

const Home = () => <div>Home</div>;

class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                </>
            </Router>
        );
    }
}

export default App;
