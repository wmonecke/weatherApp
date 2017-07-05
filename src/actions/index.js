import axios from 'axios';

const API_KEY  = '8fab31f999a73ccb780e906f833dc3ca';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request within action: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
