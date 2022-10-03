export type DeviceState = "on" | "off";

interface Device {
  id: string;
  name: string;
  state: DeviceState;
}

export default Device;
