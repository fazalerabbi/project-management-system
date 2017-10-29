const DashboardReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_DASHBOARD':
            console.log('GET_DASHBOARD');
            return state;
        case 'UPDATE_DASHBOARD':
            console.log('GET_DASHBOARD');
            return state;
        default:
            return state;
    }
}

export default DashboardReducer;