import { GET_WEATHER } from "./types";

export function getWeather(){
  let API_KEY = '9bec569f736e3bbeec359990ca8fd5d7'
  return dispatch => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=94040,us&units=imperial&appid=${API_KEY}`)
        .then(res => res.json())
        .then(json => dispatch({type: GET_WEATHER, payload: json}))
  };
}
