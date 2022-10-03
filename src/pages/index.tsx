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

DashboardPage.getLayout = getDashboardLayout;

export default DashboardPage;
