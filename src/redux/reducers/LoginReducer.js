import { LOGIN_ACTIVITY } from "../redux/ActionTypes"

const initialState = {
    user: '',
}

export const loginReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case LOGIN_ACTIVITY: {
            console.log("login payload =", payload)
            return {
                ...state,
                user: payload.user,
            }
        }
        default:
            return state
    }
}
