import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Event from "../components/Event";
import { getDashboardLayout } from "../layout";

import Page, { NextPageWithLayout } from "../layout/Page";
import useGetEvents from "../services/useGetEvents";
import Grid from "../styles/Grid";

const ProfilePage: NextPageWithLayout = () => {
  const { events } = useGetEvents();

  return (
    <Page title="Events">
      <Grid>
        {events.map(({ id, active, name }) => (
          <Event key={id} id={id} active={active}>
            <Event.Title>{name}</Event.Title>
          </Event>
        ))}
      </Grid>
    </Page>
  );
};

ProfilePage.getLayout = getDashboardLayout;

export const getServerSideProps = withPageAuthRequired();

export default ProfilePage;
