type SensorData = { value: string; min: string; max: string };

interface Sensor {
  id: string;
  name: string;
  online: boolean;
  data: { humidity?: SensorData; watt?: SensorData; temp?: SensorData };
}

export default Sensor;
