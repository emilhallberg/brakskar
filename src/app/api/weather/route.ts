const YR_API_PATH =
  "https://api.met.no/weatherapi/locationforecast/2.0/compact.json";

interface YrWeatherResponse {
  properties: {
    timeseries: {
      time: string;
      data: {
        instant: {
          details: {
            air_temperature: number;
            relative_humidity: number;
            wind_speed: number;
            wind_from_direction: number;
          };
        };
      };
    }[];
  };
}

const convert = ({ properties: { timeseries } }: YrWeatherResponse) =>
  timeseries.map(({ time, data }) => ({
    time,
    temperature: `${Math.round(data.instant.details.air_temperature)}°`,
    humidity: `${Math.round(data.instant.details.relative_humidity)}%`,
    wind: `${Math.round(data.instant.details.wind_speed)} m/s`,
    windDirection: data.instant.details.wind_from_direction,
  }));

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return Response.json({ message: "Missing coordinates." }, { status: 400 });
  }

  const url = `${YR_API_PATH}?lat=${lat}&lon=${lon}`;

  try {
    const result = await fetch(url, {
      headers: {
        "User-Agent": "Brakskar/0.1",
      },
      next: { revalidate: 900 },
    });

    if (!result.ok) {
      return Response.json(
        { message: "Weather data not found." },
        { status: result.status },
      );
    }

    const [data] = convert(await result.json());

    if (!data) {
      return Response.json(
        { message: "Weather data not found." },
        { status: result.status },
      );
    }

    return Response.json(data, { status: result.status });
  } catch {
    return Response.json({ message: "Internal error." }, { status: 500 });
  }
};
