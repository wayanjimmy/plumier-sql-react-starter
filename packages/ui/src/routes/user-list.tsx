import React, { Component } from "react";
import { User } from "core";
import axios from "axios";
import { Column, Media, Message } from "rbx";
import Avatar from "avataaars";

import Layout from "../components/layout";

type Props = {
    path: string;
};

type State = {
    forbidden: boolean;
    users: User[];
};

class UserList extends Component<Props, State> {
    state = {
        forbidden: false,
        users: []
    };

    fetch = async () => {
        try {
            let res = await axios.get<User[]>("/api/user");
            this.setState({ users: res.data });
        } catch (error) {
            if (error.response.status === 401) {
                this.setState({ forbidden: true });
            }
        }
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        let { users, forbidden } = this.state;

        return (
            <Layout>
                <Column.Group centered>
                    <Column size="half">
                        <div style={{ padding: "3rem" }}>
                            {forbidden && (
                                <Message color="warning">
                                    <Message.Body>
                                        Sorry, you don't have permission
                                    </Message.Body>
                                </Message>
                            )}
                            {users.map((user: User) => (
                                <Media key={user.id}>
                                    <Media.Item as="figure" align="left">
                                        <Avatar
                                            style={{
                                                width: "48x",
                                                height: "48px"
                                            }}
                                            avatarStyle="Circle"
                                        />
                                    </Media.Item>
                                    <Media.Item align="content">
                                        <p>{user.displayName}</p>
                                    </Media.Item>
                                </Media>
                            ))}
                        </div>
                    </Column>
                </Column.Group>
            </Layout>
        );
    }
}

export default UserList;
