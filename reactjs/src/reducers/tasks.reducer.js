const TaskReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TASKS':
            console.log('GET_TASKS');
            return state;
        case 'GET_SINGLE_TASK':
            console.log('GET_SINGLE_TASK');
            return state;
        case 'CREATE_TASK':
            console.log('CREATE_TASK');
            return state;
        case 'UPDATE_TASK':
            console.log('UPDATE_TASK');
            return state;
        default:
            return state;
    }
}

export default TaskReducer;