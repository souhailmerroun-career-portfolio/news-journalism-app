import { ComponentMeta } from "@storybook/react";
import AdminNewsIndexPage from "./AdminNewsIndexPage";
import Layout from "./Layout";

export default {
    title: 'Pages/Admin/NewsIndex',
    component: AdminNewsIndexPage,
    decorators: [
        (Story) => (
            <Layout loggedIn={true}>
                <Story />
            </Layout>
        ),      
    ],
} as ComponentMeta<typeof AdminNewsIndexPage>;

export const Primary = () => <AdminNewsIndexPage />