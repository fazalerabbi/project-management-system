import axios from 'axios';

import config from '../config/app';

const signUp = (user) => {
    const apiURL = config.API_URL+'/auth/register';

    return dispatch => {
        return axios.post(apiURL, user).then(
            (success) => {
                dispatch({
                    type: "USER_SIGNEDUP_SUCCESSFULLY",
                    payload: success.data
                })
            },
            (error) => {
                dispatch({
                    type: "USER_SIGNEDUP_ERROR",
                    payload: error.data
                })
            }
        )
    }
}

const signIn = (user) => {
    const apiURL = config.API_URL+'/auth/login';
    console.log(apiURL);

    return dispatch => {
        return axios.post(apiURL, user).then(
            (success) => {
                dispatch({
                    type: "USER_SIGNEDIN_SUCCESSFULLY",
                    payload: success.data
                })
            },
            (error) => {
                dispatch({
                    type: "USER_SIGNEDIN_ERROR",
                    payload: error.data
                })
            }
        )
    }
}

const authActions = {
    signUp: signUp,
    signIn: signIn,
};

export default authActions;