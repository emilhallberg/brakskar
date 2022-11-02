import useSWR from "swr";
import Sensor from "../entities/sensor";

import UseService from "../entities/useService";
import client from "./client";

interface UseGetSensors extends UseService {
  sensors: Sensor[];
}

const useGetSensors = (): UseGetSensors => {
  const { data, error, mutate } = useSWR("/sensors", client.get, {
    revalidateOnFocus: false,
  });

  return { sensors: data || [], loading: !data, mutate, error };
};

export default useGetSensors;
