import { combineReducers } from "redux";
import { counterReducer } from './counter';
import { timerReducer } from './timer';
import { weatherReducer } from './weather';

export default combineReducers({
    counter: counterReducer,
    timer: timerReducer,
    weather: weatherReducer,
})

