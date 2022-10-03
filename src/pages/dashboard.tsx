import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Page from "../layout/Page";

const DashboardPage: NextPage = () => (
  <Page title="Dashboard">
    <h6>Dashboard</h6>
  </Page>
);

export const getServerSideProps = withPageAuthRequired();

export default DashboardPage;
