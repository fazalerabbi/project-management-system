const ProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return state;
        case 'UPDATE_PROFILE':
            return state;
        default:
            return state;
    }
}

export default ProfileReducer;