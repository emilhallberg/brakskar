// @ts-ignore
import { LiveApi } from "telldus-api";
import Device from "../entities/device";
import Hub from "../entities/hub";
import Provider from "../entities/provider";
import Sensor from "../entities/sensor";
import Event from "../entities/event";

interface TelldusDevice {
  id: string; // "10409815";
  clientDeviceId: string; // "11";
  name: string; // "2. Svamp";
  state: 1 | 2; // 0;
  statevalue: unknown;
  stateValues: unknown[];
  methods: number; // 0;
  metadataHash: string; // "bf21a9e8fbc5a3846fb05b4fa0859e0917b2202f";
  parametersHash: string; // "667349cfeb294970fd0072c7f37dcf579f6ed312";
  type: string; // "device";
  client: string; // "498681";
  clientName: string; // "Anfield ZNet";
  online: "0" | "1"; // 0;
  editable: number; // 1;
  ignored: number; // 0;
}

interface TelldusClient {
  id: string; // "498681";
  uuid: string; // "75ce7015-f555-4cee-af88-df621482c4de";
  name: string; // "Anfield ZNet";
  online: "0" | "1"; // 0;
  editable: number; // 1;
  extensions: number; // 3;
  version: string; // "1.3.2";
  type: string; // "TellStick ZNet Lite v2";
  ip: string; // "158.174.23.15";
}

interface TelldusSensor {
  id: string;
  name: string;
  online: "0" | "1"; // 0;
  editable: number; // 1;
  battery: number; // 254;
  client: string; // "251586";
  clientName: string; // "Brakskar25";
  ignored: number; // 0;
  keepHistory: number; // 0;
  lastUpdated: number; // 1634417681;
  miscValues?: unknown;
  model: string; // "0159-0001-0051";
  protocol: string; // "zwave";
  sensorId: number; // "11";
  data: { name: string; value: string; min: string; max: string }[];
}

interface TelldusEvent {
  id: string; // "498681";
  description: string;
  active: "0" | "1";
}

const convertClients = ({ client }: { client: TelldusClient[] }): Hub[] =>
  client.map(({ id, name, online, longitude, latitude }) => ({
    id,
    name,
    online: online === "1",
    lat: latitude,
    lon: longitude,
  }));

const convertDevices = (devices: TelldusDevice[]): Device[] =>
  devices.map(({ id, name, state }) => ({
    id,
    name,
    state: state === 1 ? "on" : "off",
  }));

const convertSensors = (sensors: TelldusSensor[]): Sensor[] =>
  sensors.map(({ id, name, online, data }) => ({
    id,
    name,
    online: online === "1",
    data: data.reduce(
      (s, v) => ({
        ...s,
        [v.name]: { value: v.value, minValue: v.min, maxValue: v.max },
      }),
      {},
    ),
  }));

const convertEvents = ({ event }: { event: TelldusEvent[] }): Event[] =>
  event.map(({ id, description, active }) => ({
    id,
    name: description,
    active: active === "1",
  }));

interface InitTelldusProps {
  key: string;
  secret: string;
  tokenKey: string;
  tokenSecret: string;
}

const initTelldus = async (config?: InitTelldusProps): Promise<Provider> => {
  if (config) {
    const api = new LiveApi({ ...config });

    const isConnected = async () => true;

    const getHubs = async () => api.listClients().then(convertClients);

    const getDevices = async () => api.listDevices().then(convertDevices);

    const getEvents = async () => api.listEvents().then(convertEvents);

    const getSensor = ({ id }: { id: string }) => api.getSensorInfo(id);

    const getSensors = async () =>
      api
        .listSensors()
        .then((res: TelldusSensor[]) => Promise.all(res.map(getSensor)))
        .then(convertSensors);

    const setDeviceState = async (id: string, state: "on" | "off") =>
      api
        .onOffDevice(id, state === "on")
        .then((res: { status: string }) => res.status === "success");

    return {
      id: "telldus",
      title: "Telldus",
      state: "connected",
      metadata: { ...config },
      isConnected,
      getHubs,
      getDevices,
      getEvents,
      getSensors,
      setDeviceState,
    };
  }

  return {
    id: "telldus",
    title: "Telldus",
    state: "disconnected",
    metadata: { key: "", secret: "", tokenKey: "", tokenSecret: "" },
    isConnected: async () => false,
    getHubs: async () => [],
    getDevices: async () => [],
    getEvents: async () => [],
    getSensors: async () => [],
    setDeviceState: async () => false,
  };
};

export default initTelldus;
