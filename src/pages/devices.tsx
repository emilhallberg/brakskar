import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Page, { NextPageWithLayout } from "../layout/Page";

import useGetDevices from "../services/useGetDevices";
import Device from "../components/Device";
import { getDashboardLayout } from "../layout";
import Grid from "../styles/Grid";

const DevicesPage: NextPageWithLayout = () => {
  const { devices } = useGetDevices();

  return (
    <Page title="Devices">
      <Grid>
        {devices.map(({ id, name, state }) => (
          <Device key={id} id={id} state={state}>
            <Device.Title>{name}</Device.Title>
          </Device>
        ))}
      </Grid>
    </Page>
  );
};

DevicesPage.getLayout = getDashboardLayout;

export const getServerSideProps = withPageAuthRequired();

export default DevicesPage;
