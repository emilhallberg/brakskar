/* eslint-disable no-unused-vars */
import Device, { DeviceState } from "./device";
import Event from "./event";
import Hub from "./hub";
import Sensor from "./sensor";

interface Provider {
  id: string;
  title: string;
  state: "connected" | "disconnected";
  metadata: { [key: string]: string };
  isConnected: () => Promise<boolean>;
  getHubs: () => Promise<Hub[]>;
  getDevices: () => Promise<Device[]>;
  getEvents: () => Promise<Event[]>;
  getSensors: () => Promise<Sensor[]>;
  setDeviceState: (id: Device["id"], state: DeviceState) => Promise<boolean>;
}

export default Provider;
