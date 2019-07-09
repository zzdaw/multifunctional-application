const initialState = {
    time: 0
}

export function timerReducer(state = initialState, action) {
    switch (action.type) {
        case "RESET_TIMER":
            return initialState;
        case "START_TIMER":
            return {
                ...state,
                time: state.time,
                offset: action.offset
            }
        case "STOP_TIMER":
            return {
                ...state,
                time: state.time
            }
        case 'TICK':
            return {
                ...state,
                time: state.time + (action.time - state.offset),
                offset: action.time
            }
        default: return state;
    }
}