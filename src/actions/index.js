import axios from 'axios'

const API_KEY = 'c1a3d41880164dd1a41282e427bcea92'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ar`

  const request = axios.get(url)

  console.log('Request: ', request)

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
