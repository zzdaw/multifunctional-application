import { inputHandler } from '../actions'
//za pomocą redux-thunk mogę wywołać akcję w fetchForecast
export const dispatchFetch = postcode => dispatch => {
    dispatch(fetchForecast(postcode));
};

const API_KEY = '4b6ea7c9ce874e79e3243ac49ffda49e';
const API_ADDRESS = 'https://api.openweathermap.org/data/2.5/weather?';

function url(postcode) {
    return `${API_ADDRESS}q=${postcode}&units=metric&APPID=${API_KEY}&lang=pl`;
}

const fetchForecast = (postcode) => (dispatch) => {
    //console.log(`Wywołany fetch`);
    fetch(url(postcode))
        .then(response => response.json())
        .then(responseJSON => dispatch(inputHandler(responseJSON)))
        .catch(error => {
            console.error(error)
        });
}
