import useSWR from "swr";
import UseService from "../entities/useService";
import Weather from "../entities/weather";
import client from "./client";

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
  const query = (lat && lon) ?? `?lat=${lat}&lon=${lon}`;
  const { data, error, mutate } = useSWR(`/weather${query}`, client.get);

  return { weather: data, loading: !data, mutate, error };
};

export default useGetWeather;
