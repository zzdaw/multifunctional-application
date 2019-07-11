const initialState = {
    tasksArr: [],
    flag: true,
    key: '1'
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasksArr: [...state.tasksArr, { text: action.task, key: state.key, done: false }],
                flag: true,
                key: (parseInt(state.key, 10) + 1).toString()
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasksArr: [...state.tasksArr.filter(item => item.key != action.id)]
            }
        case 'DONE_TASK':
            return {
                ...state,
                tasksArr: [...state.tasksArr.map(el => {
                    if (el.key === action.id) {
                        return { text: el.text, key: el.key, done: el.done === false ? true : false };
                    } else { return el }
                })]
            }
        default: return state;
    }
}