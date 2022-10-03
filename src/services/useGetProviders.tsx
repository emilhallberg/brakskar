import useSWR from "swr";

import UseService from "../entities/useService";
import Provider from "../entities/provider";
import client from "./client";

interface UseGetProviders extends UseService {
  providers: Provider[];
}

const useGetProviders = (): UseGetProviders => {
  const { data, error, mutate } = useSWR("/providers", client.get);

  return { providers: data || [], loading: !data, mutate, error };
};

export default useGetProviders;
