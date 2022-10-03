import useSWR from "swr";

import UseService from "../entities/useService";
import client from "./client";

interface UseGetEvents extends UseService {
  events: any[];
}

const useGetSensors = (): UseGetEvents => {
  const { data, error, mutate } = useSWR("/events", client.get);

  return { events: data || [], loading: !data, mutate, error };
};

export default useGetSensors;
