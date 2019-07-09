export const increaseNumber = () => ({
    type: 'INCREMENT',
})
export const decreaseNumber = () => ({
    type: 'DECREMENT',
})

export function startTimer() {
    return {
        type: 'START_TIMER',
        offset: Date.now(),
    };
}

export function stopTimer() {
    return {
        type: 'STOP_TIMER',
    };
}

export function resetTimer() {
    return {
        type: 'RESET_TIMER',
    };
}

export function tickTimer() {
    return {
        type: 'TICK',
        time: Date.now()
    };
}

export function inputHandler(forecast) {
    //console.log(`Doszło do akcji`);
    //console.log(forecast);
    return {
        type: 'SET_FORECAST',
        forecast
    }
}

// export const addTask = (task) => ({
//     type: 'ADD_TASK',
//     task
// })

export function addTask(task) {
    console.log(`Doszło do akcji`);
    console.log(task);
    return {
        type: 'ADD_TASK',
        task
        //task: { text: task, id: 0 }
    }
}

export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        id
    }
}