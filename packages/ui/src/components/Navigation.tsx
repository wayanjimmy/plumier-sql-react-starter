import React from "react";
import { Navbar, Button } from "rbx";
import { navigate } from "@reach/router";

import * as authUtil from "../auth";

const Navigation: React.FC = () => (
    <Navbar>
        <Navbar.Brand>
            <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
            <Navbar.Segment align="start" />
            <Navbar.Segment align="end">
                <Navbar.Item>
                    {authUtil.isAuthenticated() ? (
                        <Button.Group>
                            <Button color="light" onClick={() => navigate("/")}>
                                Home
                            </Button>
                            <Button color="light" onClick={() => navigate("/users")}>
                                Users
                            </Button>
                            <Button
                                color="light"
                                onClick={() => {
                                    if (window.confirm("Are you sure want to logout?")) {
                                        authUtil.forgetToken();
                                        navigate("/login");
                                    }
                                }}
                            >
                                Log out
                            </Button>
                        </Button.Group>
                    ) : (
                        <Button color="primary" onClick={() => navigate("/login")}>
                            <strong>Log in</strong>
                        </Button>
                    )}
                </Navbar.Item>
            </Navbar.Segment>
        </Navbar.Menu>
    </Navbar>
);

export default Navigation;
