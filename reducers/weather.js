const initialState = {
    forecast: undefined
}

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_FORECAST":
            return {
                ...state,
                forecast: action.forecast
            }
        default: return state;
    }
}