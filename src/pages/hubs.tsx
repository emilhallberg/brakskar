import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Hub from "../components/Hub";
import { getDashboardLayout } from "../layout";
import Page, { NextPageWithLayout } from "../layout/Page";
import Grid from "../styles/Grid";
import useGetHubs from "../services/useGetHubs";

const HubsPage: NextPageWithLayout = () => {
  const { hubs } = useGetHubs();
  return (
    <Page title="Hubs">
      <Grid>
        {hubs.map(({ id, online, name }) => (
          <Hub key={id} id={id} online={online}>
            <Hub.Title>{name}</Hub.Title>
          </Hub>
        ))}
      </Grid>
    </Page>
  );
};

HubsPage.getLayout = getDashboardLayout;

export const getServerSideProps = withPageAuthRequired();

export default HubsPage;
