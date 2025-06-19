export const weatherCodeToMeteocons: {
  [code: number]: { day: string; night: string };
} = {
  0: { day: 'clear-day.svg', night: 'clear-night.svg' },

  1: { day: 'partly-cloudy-day.svg', night: 'partly-cloudy-night.svg' },
  2: { day: 'partly-cloudy-day.svg', night: 'partly-cloudy-night.svg' },
  3: { day: 'cloudy.svg', night: 'cloudy.svg' },

  45: { day: 'fog-day.svg', night: 'fog-night.svg' },
  48: { day: 'fog-day.svg', night: 'fog-night.svg' },

  51: { day: 'drizzle.svg', night: 'drizzle.svg' },
  53: { day: 'drizzle.svg', night: 'drizzle.svg' },
  55: { day: 'drizzle.svg', night: 'drizzle.svg' },
  56: { day: 'drizzle.svg', night: 'drizzle.svg' },
  57: { day: 'drizzle.svg', night: 'drizzle.svg' },

  61: { day: 'rain.svg', night: 'rain.svg' },
  63: { day: 'rain.svg', night: 'rain.svg' },
  65: { day: 'rain.svg', night: 'rain.svg' },
  66: { day: 'rain.svg', night: 'rain.svg' },
  67: { day: 'rain.svg', night: 'rain.svg' },

  71: { day: 'snow.svg', night: 'snow.svg' },
  73: { day: 'snow.svg', night: 'snow.svg' },
  75: { day: 'snow.svg', night: 'snow.svg' },
  77: { day: 'snow.svg', night: 'snow.svg' },

  80: { day: 'rain.svg', night: 'rain.svg' },
  81: { day: 'rain.svg', night: 'rain.svg' },
  82: { day: 'rain.svg', night: 'rain.svg' },

  85: { day: 'snow.svg', night: 'snow.svg' },
  86: { day: 'snow.svg', night: 'snow.svg' },

  95: { day: 'thunderstorms-day.svg', night: 'thunderstorms-night.svg' },
  96: { day: 'thunderstorms-day.svg', night: 'thunderstorms-night.svg' },
  99: { day: 'thunderstorms-day.svg', night: 'thunderstorms-night.svg' },
};

export const WEATHER_CODE_MAP: Record<
  number,
  { de: string; en: string; hr: string }
> = {
  0: { de: 'Klarer Himmel', en: 'Clear sky', hr: 'Vedro nebo' },
  1: { de: 'Überwiegend klar', en: 'Mainly clear', hr: 'Pretežno vedro' },
  2: { de: 'Teilweise bewölkt', en: 'Partly cloudy', hr: 'Djelomično oblačno' },
  3: { de: 'Bedeckt', en: 'Overcast', hr: 'Oblačno' },
  45: { de: 'Nebel', en: 'Fog', hr: 'Magla' },
  48: { de: 'Reif-Nebel', en: 'Depositing rime fog', hr: 'Magla s inješenjem' },
  51: { de: 'Leichter Nieselregen', en: 'Light drizzle', hr: 'Slaba rosulja' },
  53: {
    de: 'Mäßiger Nieselregen',
    en: 'Moderate drizzle',
    hr: 'Umjerena rosulja',
  },
  55: { de: 'Starker Nieselregen', en: 'Dense drizzle', hr: 'Gusta rosulja' },
  56: {
    de: 'Leichter gefrierender Nieselregen',
    en: 'Light freezing drizzle',
    hr: 'Slaba rosulja koja se ledi',
  },
  57: {
    de: 'Starker gefrierender Nieselregen',
    en: 'Dense freezing drizzle',
    hr: 'Gusta rosulja koja se ledi',
  },
  61: { de: 'Leichter Regen', en: 'Slight rain', hr: 'Slaba kiša' },
  63: { de: 'Mäßiger Regen', en: 'Moderate rain', hr: 'Umjerena kiša' },
  65: { de: 'Starker Regen', en: 'Heavy rain', hr: 'Jaka kiša' },
  66: {
    de: 'Leichter gefrierender Regen',
    en: 'Light freezing rain',
    hr: 'Slaba kiša koja se ledi',
  },
  67: {
    de: 'Starker gefrierender Regen',
    en: 'Heavy freezing rain',
    hr: 'Jaka kiša koja se ledi',
  },
  71: { de: 'Leichter Schneefall', en: 'Slight snowfall', hr: 'Slab snijeg' },
  73: {
    de: 'Mäßiger Schneefall',
    en: 'Moderate snowfall',
    hr: 'Umjeren snijeg',
  },
  75: { de: 'Starker Schneefall', en: 'Heavy snowfall', hr: 'Jak snijeg' },
  77: { de: 'Schneekörner', en: 'Snow grains', hr: 'Snježne zrnca' },
  80: {
    de: 'Leichte Regenschauer',
    en: 'Slight rain showers',
    hr: 'Slabi pljuskovi',
  },
  81: {
    de: 'Mäßige Regenschauer',
    en: 'Moderate rain showers',
    hr: 'Umjereni pljuskovi',
  },
  82: {
    de: 'Heftige Regenschauer',
    en: 'Violent rain showers',
    hr: 'Snažni pljuskovi',
  },
  85: {
    de: 'Leichte Schneeschauer',
    en: 'Slight snow showers',
    hr: 'Slabi snježni pljuskovi',
  },
  86: {
    de: 'Heftige Schneeschauer',
    en: 'Heavy snow showers',
    hr: 'Snažni snježni pljuskovi',
  },
  95: { de: 'Gewitter', en: 'Thunderstorm', hr: 'Grmljavinska oluja' },
  96: {
    de: 'Gewitter mit leichtem Hagel',
    en: 'Thunderstorm with slight hail',
    hr: 'Grmljavina s slabom tučom',
  },
  99: {
    de: 'Gewitter mit starkem Hagel',
    en: 'Thunderstorm with heavy hail',
    hr: 'Grmljavina s jakom tučom',
  },
};

export interface CurrentWeather {
  hour: number;
  interval: number;
  is_day: number;
  precipitation_probability: number;
  relative_humidity_2m: number;
  temperature_2m: number;
  time: string;
  weathercode: number;
  weekday: string;
  wind_speed_10m: number;
}

export interface DailyForecast {
  active: boolean[];
  icon: string[];
  precipitation_probability_mean: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weathercode: number[];
  weekday: string[];
  weekdayLong: string[];
  wind_speed_10m_max: number[];
}

export interface HourlyForecast {
  day: string;
  hours: {
    hour: number;
    humidity: number;
    precipitation_probability: number;
    temperature: number;
    weathercode: number;
    wind: number;
    wind_direction: number;
  }[];
}
