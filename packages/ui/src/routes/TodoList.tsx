import React, { Component } from "react";
import { Column, List, Checkbox, Input } from "rbx";

import Layout from "../components/Layout";

type Props = {
    path: string;
};

class TodoList extends Component<Props> {
    render() {
        return (
            <Layout>
                <Column.Group centered>
                    <Column size="half">
                        <List>
                            <List.Item>
                                <Input type="text" placeholder="Something todo? type here ..." />
                            </List.Item>
                            <List.Item>
                                <Checkbox /> Item 1
                            </List.Item>
                            <List.Item>
                                <Checkbox /> Item 2
                            </List.Item>
                        </List>
                    </Column>
                </Column.Group>
            </Layout>
        );
    }
}

export default TodoList;
