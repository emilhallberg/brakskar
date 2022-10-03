import useSWR from "swr";
import Device from "../entities/device";

import UseService from "../entities/useService";
import client from "./client";

interface UseGetDevices extends UseService {
  devices: Device[];
}

const useGetDevices = (): UseGetDevices => {
  const { data, error, mutate } = useSWR("/devices", client.get);

  return { devices: data || [], loading: !data, mutate, error };
};

export default useGetDevices;
