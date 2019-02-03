import React from "react";
import { Navbar, Button } from "rbx";
import { navigate } from "@reach/router";

const Navigation: React.FC = () => (
    <Navbar>
        <Navbar.Brand>
            <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
            <Navbar.Segment align="start" />
            <Navbar.Segment align="end">
                <Navbar.Item>
                    <Button.Group>
                        <Button color="primary">
                            <strong>Log in</strong>
                        </Button>
                        <Button color="light" onClick={() => navigate("/login")}>
                            Log out
                        </Button>
                    </Button.Group>
                </Navbar.Item>
            </Navbar.Segment>
        </Navbar.Menu>
    </Navbar>
);

export default Navigation;
