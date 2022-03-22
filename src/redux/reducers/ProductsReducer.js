import { PRODUCT_LIST } from "../redux/ActionTypes"

const initialState = {
    products: '',
}

export const productsReducer = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case PRODUCT_LIST: {
            console.log("product payload = ", payload?.products)
            return {
                ...state,
                products: payload?.products,
            }
        }
        default:
            return state
    }
}
