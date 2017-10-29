const ProjectReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PROJECTS':
            console.log('GET_PROJECTS');
            return state;
        case 'GET_SINGLE_PROJECT':
            console.log('GET_SINGLE_PROJECT');
            return state;
        case 'CREATE_PROJECT':
            console.log('CREATE_PROJECT');
            return state;
        case 'UPDATE_PROJECT':
            console.log('UPDATE_PROJECT');
            return state;
        default:
            return state;
    }
}

export default ProjectReducer;