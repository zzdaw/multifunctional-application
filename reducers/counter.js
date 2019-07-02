//const initialState = { counter: 0 };
//liczba jest typem prostym, które w JavaScripcie przekazywane są przez wartość (kopiowanie). Gdyby stan nie był liczbą, a obiektem musiałbym zwrócić nowy obiekt
//początkowo w counterReducer zapisany jest stan 0 jest on przekazany w combineReducers do stora
export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: return state;
    }
    //return state;
}

//export default counter;