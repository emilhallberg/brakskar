import withServer, { WithServerHandler } from "../../../services/server";

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
            air_pressure_at_sea_level: number;
            cloud_area_fraction: number;
            wind_from_direction: number;
          };
        };
      };
    }[];
  };
}

const convert = ({ properties: { timeseries } }: YrWeatherResponse) =>
  timeseries
    .map(({ time, data }) => ({
      time,
      temperature: `${data.instant.details.air_temperature}°`,
      humidity: `${data.instant.details.relative_humidity}%`,
      wind: `${data.instant.details.wind_speed}`,
      windDirection: data.instant.details.wind_from_direction,
    }))
    .filter(
      ({ time }) =>
        new Date(time).getDate() === new Date().getDate() &&
        new Date(time).getHours() === new Date().getHours(),
    );

const handler = async ({ req, res, auth }: WithServerHandler) => {
  if (req.method === "GET") {
    const yr = auth.metadata?.yr;

    const { query } = req;

    const lat = yr?.latitude || query.lat;
    const lon = yr?.longitude || query.lon;

    const url = `${YR_API_PATH}?lat=${lat}&lon=${lon}`;

    const handleResult = async (result: Response) => {
      if (result.ok) {
        const [data] = await result.json().then(convert);
        if (data) {
          res.status(result.status).json({ name: yr?.name, ...data });
        } else {
          res
            .status(result.status)
            .json({ message: "Weather data not found." });
        }
      } else {
        res.status(result.status).json({ message: "Weather data not found." });
      }
    };

    const handleError = async () => {
      res.status(404).json({ message: "Internal error." });
    };

    await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Brakskar/0.1",
      },
    })
      .then(handleResult)
      .catch(handleError);
  } else {
    res.status(404).json({ message: "Method not found." });
  }
};

export default withServer(handler);
