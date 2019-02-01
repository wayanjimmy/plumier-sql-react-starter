import React from "react";
import { Title } from "rbx";

import Layout from "../components/Layout";

const Home: React.FC<{ path: string }> = () => (
    <Layout>
        <Title>Home</Title>
    </Layout>
);

export default Home;
