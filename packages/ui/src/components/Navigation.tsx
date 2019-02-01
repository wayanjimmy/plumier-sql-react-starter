import React from "react";
import { Navbar, Button } from "rbx";
import { navigate } from "@reach/router";

const Navigation: React.FC = () => (
    <Navbar>
        <Navbar.Brand>
            <Navbar.Item href="#">
                <img src="https://bulma.io/images/bulma-logo.png" alt="" role="presentation" width="112" height="28" />
            </Navbar.Item>
            <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
            <Navbar.Segment align="start">
                <Navbar.Item>Home</Navbar.Item>
            </Navbar.Segment>
            <Navbar.Segment align="end">
                <Navbar.Item>
                    <Button.Group>
                        <Button color="primary">
                            <strong>Register</strong>
                        </Button>
                        <Button color="light" onClick={() => navigate("/login")}>
                            Log in
                        </Button>
                    </Button.Group>
                </Navbar.Item>
            </Navbar.Segment>
        </Navbar.Menu>
    </Navbar>
);

export default Navigation;
