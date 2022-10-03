import useSWR from "swr";
import Hub from "../entities/hub";

import UseService from "../entities/useService";
import client from "./client";

interface UseGetHubs extends UseService {
  hubs: Hub[];
}

const useGetHubs = (): UseGetHubs => {
  const { data, error, mutate } = useSWR("/hubs", client.get);

  return { hubs: data || [], loading: !data, mutate, error };
};

export default useGetHubs;
