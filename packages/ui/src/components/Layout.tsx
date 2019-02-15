import React from "react";
import { Content } from "rbx";

import Navigation from "./Navigation";

const Layout: React.FC<{ children: JSX.Element[] | JSX.Element | null }> = ({ children }) => (
    <Content>
        <Navigation />
        {children}
    </Content>
);

export default Layout;
