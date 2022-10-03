import { useCallback } from "react";
import Device, { DeviceState } from "../entities/device";

import client from "./client";
import useGetDevices from "./useGetDevices";

interface UseDevice {
  toggle: Function;
}

const useDevice = (id: Device["id"]): UseDevice => {
  const { devices, mutate } = useGetDevices();

  const toggle = useCallback(
    async (state: DeviceState) => {
      await mutate(
        devices.map((e) => (e.id === id ? { ...e, state } : e)),
        false,
      ).then(() => client.post(`/devices/${id}?state=${state}`));
    },
    [devices, id, mutate],
  );

  return { toggle };
};

export default useDevice;
