import React, { Component } from "react";
import { Container, Column, Title, Box, Field, Label, Control, Input, Icon } from "rbx";
import { Mail, Key } from "react-feather";

class Login extends Component<{}, { email: string; password: string }> {
    state = {
        email: "",
        password: ""
    };

    handleEmailChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ email: e.currentTarget.value });
    };

    handlePasswordChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ password: e.currentTarget.value });
    };

    render() {
        return (
            <Container>
                <Column size={4} offset={4}>
                    <Title size={3}>Login</Title>
                    <Title subtitle>Please login to proceed.</Title>
                    <Box>
                        <form>
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
                        </form>
                    </Box>
                </Column>
            </Container>
        );
    }
}

export default Login;
