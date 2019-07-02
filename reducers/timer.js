const initialState = {
    startedAt: undefined,
    stoppedAt: undefined,
    baseTime: undefined
}

export function timerReducer(state = initialState, action) {
    switch (action.type) {
        case "RESET_TIMER":
            return initialState;
        case "START_TIMER":
            return {
                ...state,
                baseTime: action.baseTime,
                startedAt: action.now,
                stoppedAt: undefined,
            }
        case "STOP_TIMER":
            return {
                ...state,
                stoppedAt: action.now,
            }
        default: return state;
    }
}