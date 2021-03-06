import { inputHandler } from '../actions'

//za pomocą redux-thunk mogę wywołać akcję w fetchForecast
export const dispatchFetch = cityName => dispatch => {
    dispatch(fetchForecast(cityName));
};

const API_KEY = '4b6ea7c9ce874e79e3243ac49ffda49e';
const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?';

function url(cityName) {
    return `${API_ADDRESS}q=${cityName}&units=metric&APPID=${API_KEY}&lang=en`;
}

const fetchForecast = (cityName) => (dispatch) => {
    fetch(url(cityName))
        .then(response => response.json())
        .then(responseJSON => dispatch(inputHandler(responseJSON)))
        .catch(error => {
            console.error(error)
        });
}
