export const increaseNumber = () => ({
    type: 'INCREMENT',
})
export const decreaseNumber = () => ({
    type: 'DECREMENT',
})

export const startTimer = () => ({
    type: 'START_TIMER',
    offset: Date.now(),
})

export const stopTimer = () => ({
    type: 'STOP_TIMER',
})

export const resetTimer = () => ({
    type: 'RESET_TIMER',
})

export const tickTimer = () => ({
    type: 'TICK',
    time: Date.now()
})

export const inputHandler = (forecast) => ({
    type: 'SET_FORECAST',
    forecast
})

export const addTask = (task) => ({
    type: 'ADD_TASK',
    task
})

export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    id
})

export const doneTask = (id) => ({
    type: 'DONE_TASK',
    id
})