import {
    Container,
    Column,
    Title,
    Box,
    Field,
    Label,
    Control,
    Input,
    Icon,
    Button,
    Notification
} from "rbx";
import axios from "axios";
import React, { Component } from "react";
import { Mail, Key } from "react-feather";
import { navigate } from "@reach/router";

import * as authUtil from "../auth";

type Props = {
    path: string;
};

type State = {
    email: string;
    password: string;
    errors: string;
};

interface TokenResponse {
    token: string;
}

class Login extends Component<Props, State> {
    state = {
        email: "",
        password: "",
        errors: ""
    };

    handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ email: e.currentTarget.value, errors: "" });
    };

    handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ password: e.currentTarget.value, errors: "" });
    };

    handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        try {
            let { email, password } = this.state;
            let res = await axios.post<TokenResponse>("/api/auth/login", {
                email,
                password
            });
            authUtil.storeToken(res.data.token);
            navigate("/");
        } catch (error) {
            if (error.response.status === 403) {
                this.setState({ errors: error.response.data });
            }
        }
    };

    render() {
        let { errors } = this.state;

        return (
            <Container>
                <Column size={4} offset={4}>
                    <Title size={3}>Login</Title>
                    <Title subtitle>Please login to proceed.</Title>
                    <Box>
                        {errors !== "" && (
                            <Notification color="danger">{errors}</Notification>
                        )}
                        <form onSubmit={this.handleSubmit}>
                            <Field>
                                <Label>Email</Label>
                                <Control iconLeft>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        onChange={this.handleEmailChange}
                                    />
                                    <Icon size="small" align="left">
                                        <Mail size={12} />
                                    </Icon>
                                </Control>
                            </Field>
                            <Field>
                                <Label>Password</Label>
                                <Control iconLeft>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="******"
                                        onChange={this.handlePasswordChange}
                                    />
                                    <Icon size="small" align="left">
                                        <Key size={12} />
                                    </Icon>
                                </Control>
                            </Field>
                            <Field>
                                <Control>
                                    <Button
                                        color="danger"
                                        type="button"
                                        onClick={(
                                            e: React.MouseEvent<
                                                HTMLButtonElement
                                            >
                                        ) => {
                                            e.preventDefault();
                                            navigate("/");
                                        }}
                                    >
                                        Cancel
                                    </Button>{" "}
                                    <Button color="success">Login</Button>
                                </Control>
                            </Field>
                        </form>
                    </Box>
                </Column>
            </Container>
        );
    }
}

export default Login;
