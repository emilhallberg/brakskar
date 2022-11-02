import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import Page, { NextPageWithLayout } from "../layout/Page";

import { getDashboardLayout } from "../layout";
import Grid from "../styles/Grid";
import useGetSensors from "../services/useGetSensors";
import Sensor from "../components/Sensor";

const DevicesPage: NextPageWithLayout = () => {
  const { sensors } = useGetSensors();

  return (
    <Page title="Sensors">
      <Grid>
        {sensors.map(({ id, online, name, data }) => (
          <Sensor key={id} id={id} online={online}>
            {data?.temp && <Sensor.Value>{`${data.temp.value}°`}</Sensor.Value>}
            {data?.watt && <Sensor.Value>{`${data.watt.value}w`}</Sensor.Value>}
            <Sensor.Title>{name}</Sensor.Title>
          </Sensor>
        ))}
      </Grid>
    </Page>
  );
};

DevicesPage.getLayout = getDashboardLayout;

export const getServerSideProps = withPageAuthRequired();

export default DevicesPage;
