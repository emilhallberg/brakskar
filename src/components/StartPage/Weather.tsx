"use client";

import type { ReactNode } from "react";
import useGetWeather from "@/services/useGetWeather";

const BRAKSKAR_COORDINATES = {
  lat: "61.63333",
  lon: "17.18333",
};

const WeatherShell = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-full rounded-lg border border-black/10 bg-white/20 p-4 shadow-sm backdrop-blur-sm">
    {children}
  </div>
);

const Weather = () => {
  const {
    data: weather,
    isLoading,
    error,
  } = useGetWeather(BRAKSKAR_COORDINATES);

  if (isLoading) {
    return (
      <WeatherShell>
        <h4 className="text-xl font-bold leading-tight">Vädret på Brakskär</h4>
        <p className="mt-3 text-sm text-black/70">Hämtar aktuell prognos...</p>
      </WeatherShell>
    );
  }

  if (error || !weather) {
    return (
      <WeatherShell>
        <h4 className="text-xl font-bold leading-tight">Vädret på Brakskär</h4>
        <p className="mt-3 text-sm text-black/70">
          Prognosen kunde inte hämtas just nu.
        </p>
      </WeatherShell>
    );
  }

  return (
    <WeatherShell>
      <h4 className="text-xl font-bold leading-tight">Vädret på Brakskär</h4>
      <dl className="mt-4 divide-y divide-black/10 border-y border-black/10">
        <div className="flex items-baseline justify-between gap-4 py-2.5">
          <dt className="text-[0.68rem] font-medium uppercase tracking-wide text-black/60">
            Temperatur
          </dt>
          <dd className="shrink-0 text-lg font-bold">{weather.temperature}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-2.5">
          <dt className="text-[0.68rem] font-medium uppercase tracking-wide text-black/60">
            Vind
          </dt>
          <dd className="shrink-0 text-lg font-bold">{weather.wind}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 py-2.5">
          <dt className="text-[0.68rem] font-medium uppercase tracking-wide text-black/60">
            Luftfuktighet
          </dt>
          <dd className="shrink-0 text-lg font-bold">{weather.humidity}</dd>
        </div>
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-black/65">
        Prognos för Brakskär, Iggesund. Uppdaterad{" "}
        {new Intl.DateTimeFormat("sv-SE", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date(weather.time))}
        .
      </p>
    </WeatherShell>
  );
};

export default Weather;
