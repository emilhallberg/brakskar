import useSWR from "swr";
import Sensor from "../entities/sensor";

import UseService from "../entities/useService";
import client from "./client";

interface UseGetSensors extends UseService {
  sensors: Sensor[];
}

const useGetSensor = (id: Sensor["id"]): UseGetSensors => {
  const { data, error, mutate } = useSWR(`/sensors/${id}`, client.get);

  return { sensors: data, loading: !data, mutate, error };
};

export default useGetSensor;
