const initialState = {
    tasksArr: [],
    flag: false,
    key: '1'
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasksArr: [...state.tasksArr, { text: action.task, key: state.key }],
                flag: true,
                key: (parseInt(state.key, 10) + 1).toString()
            }
        default: return state;
    }
}