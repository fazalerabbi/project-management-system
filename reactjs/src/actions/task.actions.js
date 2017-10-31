const getAllTasks = () => {
    return {
        type: "GET_TASKS"
    };
}

const getSingleTask = (taskId) => {
    return {
        type: "GET_SINGLE_TASK",
        payload: taskId,
    };
}

const createTask  = (task) => {
    return {
        type: "CREATE_TASK",
        payload: task
    };
}

const updateTask  = (task) => {
    return {
        type: "UPDATE_TASK",
        payload: task
    };
}

const taskActions = {
    getAllTasks,
    getSingleTask,
    createTask,
    updateTask
}

export default taskActions;