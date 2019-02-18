import React from "react";
import { Content } from "rbx";

import Navigation from "./navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <Content>
        <Navigation />
        {children}
    </Content>
);

export default Layout;
