import { LOGIN, SIGNUP } from "../../api/Endpoints";
import { LOGIN_ACTIVITY } from "../redux/ActionTypes";
import axios from 'axios';
import { env } from 'process'

export const loginAction = (data) => ({
    type: LOGIN_ACTIVITY,
    payload: data,
})

export function emailAuthenticate(data, callBack) {
    return async (dispatch, getState) => {
        const url = getState().loginReducer.url;
        axios.post(LOGIN, data).then(res => {
            if (res.status === 200 ) {
                dispatch(loginAction({ user: res?.data }))
                callBack(true)
            }
        }).catch(err => {
            callBack(false)
            console.log('errroor part ------- ', err)
        })
    }
}

export function signupAuthenticate(data, callBack) {
    return async (dispatch, getState) => {
        const url = getState().loginReducer.url;
        axios.post(SIGNUP, data).then(res => {
            if (res.status === 200) {
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