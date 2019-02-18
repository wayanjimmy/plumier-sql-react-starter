import React, { Component } from "react";
import { User } from "core";
import axios from "axios";
import { Column, Media } from "rbx";
import Avatar from "avataaars";

import Layout from "../components/layout";

type Props = {
    path: string;
};

type State = {
    users: User[];
};

class UserList extends Component<Props, State> {
    state = {
        users: []
    };

    fetch = async () => {
        try {
            let res = await axios.get<User[]>("/api/user");
            this.setState({ users: res.data });
        } catch (_error) {}
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        let { users } = this.state;

        return (
            <Layout>
                <Column.Group centered>
                    <Column size="half">
                        <div style={{ padding: '3rem' }}>
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
