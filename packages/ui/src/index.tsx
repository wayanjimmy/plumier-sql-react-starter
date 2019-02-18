import React from "react";
import ReactDOM from "react-dom";
import "rbx/index.css";

import * as authUtil from "./auth";
import Root from "./routes/root";
import * as serviceWorker from "./service-worker";

authUtil.setDefaultHeaders();

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
