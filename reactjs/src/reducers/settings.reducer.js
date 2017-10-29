const SettingsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_SETTINGS':
            console.log("GET_SETTINGS");
            return state;
        case 'UPDATE_SETTINGS':
            console.log("UPDATE_SETTINGS");
            return state;
        default:
            return state;
    }
}

export default SettingsReducer;