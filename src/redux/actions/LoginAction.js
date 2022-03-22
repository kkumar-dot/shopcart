// import { EMAIL_AUTHENTICATE, KEY_AUTHENTICATE, PASSWORD_AUTHENTICATE, REQUEST_KEY } from "@api/Endpoints";
import { LOGIN_ACTIVITY } from "../redux/ActionTypes";
import axios from 'axios';

export const loginAction = (data) => ({
    type: LOGIN_ACTIVITY,
    payload: data,
})

export function emailAuthenticate(data, callBack) {
    console.log("login actions ======== ", data)
    return async (dispatch, getState) => {
        const url = getState().loginReducer.url;
        axios.post('http://localhost:8080/api/user/login', data).then(res => {
            console.log('EMAIL ====== ', res)
            if (res.status === 200 ) {
                console.log('res if part ==== ', res)
                dispatch(loginAction({ user: res?.data }))
                callBack(true)
            }
            // if ( res.status === 401 ) {
            //     console.log('res else part ---- ', res)
            // }
        }).catch(err => {
            callBack(false)
            console.log('errroor part ------- ', err)
        })
    }
}

export function signupAuthenticate(data, callBack) {
    console.log("signup actions ======== ", data)
    return async (dispatch, getState) => {
        const url = getState().loginReducer.url;
        axios.post('http://localhost:8080/api/user/signup', data).then(res => {
            console.log('signup response ', res)
            if (res.status === 200) {
                console.log('res ==== ', res)
                dispatch(loginAction({ user: res?.data }))
                callBack(true)
            } else {
                console.log('res', res)
            }
        }).catch(err => {
            callBack(false)
            console.log('err', err)
        })
    }
}