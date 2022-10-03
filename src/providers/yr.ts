import Provider from "../entities/provider";

interface InitYrProps {
  latitude: string;
  longitude: string;
}

const initYr = async (config?: InitYrProps): Promise<Provider> => {
  if (config) {
    const isConnected = async () => true;

    return {
      id: "yr",
      title: "YR",
      state: "connected",
      metadata: { ...config },
      isConnected,
      getHubs: async () => [],
      getDevices: async () => [],
      getEvents: async () => [],
      getSensors: async () => [],
      setDeviceState: async () => false,
    };
  }

  return {
    id: "yr",
    title: "YR",
    state: "disconnected",
    metadata: { name: "", latitude: "", longitude: "" },
    isConnected: async () => false,
    getHubs: async () => [],
    getDevices: async () => [],
    getEvents: async () => [],
    getSensors: async () => [],
    setDeviceState: async () => false,
  };
};

export default initYr;
