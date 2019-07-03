export const increaseNumber = () => ({
    type: 'INCREMENT',
})
export const decreaseNumber = () => ({
    type: 'DECREMENT',
})

export function startTimer(baseTime = 0) {
    return {
        type: 'START_TIMER',
        baseTime: baseTime,
        now: new Date().getTime() //liczba milisekund od 1.01.1970
    };
}

export function stopTimer() {
    return {
        type: 'STOP_TIMER',
        now: new Date().getTime()
    };
}

export function resetTimer() {
    return {
        type: 'RESET_TIMER',
        now: new Date().getTime()
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