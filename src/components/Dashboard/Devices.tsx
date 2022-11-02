import useGetSensors from "../../services/useGetSensors";
import Sensor from "../Sensor";
import Grid from "../../styles/Grid";
import useGetDevices from "../../services/useGetDevices";
import Device from "../Device";

const Devices = () => {
  const { devices } = useGetDevices();

  return (
    <Grid gridArea="devices">
      {devices.map(({ id, name, state }) => (
        <Device key={id} id={id} state={state}>
          <Device.Title>{name}</Device.Title>
        </Device>
      ))}
    </Grid>
  );
};

export default Devices;
