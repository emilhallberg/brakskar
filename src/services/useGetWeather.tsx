import useSWR from "swr";

type Props = {
  lat: string;
  lon: string;
};

export default function useGetWeather({ lat, lon }: Props) {
  return useSWR(`/api/weather?lat=${lat}&lon=${lon}`, (input) =>
    fetch(input).then((res) => res.json()),
  );
}
