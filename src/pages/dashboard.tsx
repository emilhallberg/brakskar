import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Weather from "../components/Weather";
import { getDashboardLayout } from "../layout";
import Page, { NextPageWithLayout } from "../layout/Page";
import Grid from "../styles/Grid";

const DashboardPage: NextPageWithLayout = () => (
  <Page title="Dashboard">
    <Grid>
      <Weather />
    </Grid>
  </Page>
);

export const getServerSideProps = withPageAuthRequired();

DashboardPage.getLayout = getDashboardLayout;

export default DashboardPage;
