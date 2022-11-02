import useSWR from "swr";
import UseService from "../entities/useService";
import Weather from "../entities/weather";
import client from "./client";
import createQuery from "../utils/createQuery";

interface UseGetWeather extends UseService {
  weather?: Weather;
}

const useGetWeather = ({
  lat,
  lon,
}: {
  lat?: string;
  lon?: string;
}): UseGetWeather => {
  const query = createQuery({ lat, lon });
  const { data, error, mutate } = useSWR(`/weather${query}`, client.get, {
    revalidateOnFocus: false,
  });

  return { weather: data, loading: !data, mutate, error };
};

export default useGetWeather;
