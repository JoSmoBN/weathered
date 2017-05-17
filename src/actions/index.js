import Axios from 'axios';

 // think of this like the service in angular
const API_KEY = '5b32005487b8122257abed094a618c11';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`;

// good practice to export actions types as variables to avoid accidental typos
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( cityName ) {
    const url = `${ ROOT_URL }&q=${ cityName },us`;
    const request = Axios.get( url );

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
