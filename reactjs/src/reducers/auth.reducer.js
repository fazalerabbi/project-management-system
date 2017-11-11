const AuthReducer = (state = {}, action) => {
    let newState = {};
    switch(action.type) {

        case 'USER_SIGNEDUP_SUCCESSFULLY':
            newState = {
                ...action.payload
            };
            console.log(newState);
            return newState;
        case 'USER_SIGNEDUP_ERROR':
            newState = {
                ...action.payload
            };
            return newState;

        case 'USER_SIGNEDIN_SUCCESSFULLY':
            if(action.payload.success) {
                newState = {
                    ...action.payload
                };

                localStorage.setItem('jwt_token', newState.token);
            }

            console.log(newState);
            return newState;
        case 'USER_SIGNEDIN_ERROR':
            newState = {
                ...action.payload
            };
            return newState;
        default:
            return state;
    }
}

export default AuthReducer;