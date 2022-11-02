import useGetSensors from "../../services/useGetSensors";
import Sensor from "../Sensor";
import Grid from "../../styles/Grid";

const Climate = () => {
  const { sensors } = useGetSensors();

  return (
    <Grid gridArea="climate">
      {sensors.map(({ id, online, name, data }) => (
        <Sensor key={id} id={id} online={online}>
          <Sensor.Value>{`${data?.temp?.value}°`}</Sensor.Value>
          <Sensor.Title>{name}</Sensor.Title>
        </Sensor>
      ))}
    </Grid>
  );
};

export default Climate;
