import { combineReducers } from "redux";
import { counterReducer } from './counter';
import { timerReducer } from './timer';
import { weatherReducer } from './weather';
import { todoReducer } from './todo';

export default combineReducers({
    counter: counterReducer,
    timer: timerReducer,
    weather: weatherReducer,
    todo: todoReducer
})

