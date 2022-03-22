// import { EMAIL_AUTHENTICATE, KEY_AUTHENTICATE, PASSWORD_AUTHENTICATE, REQUEST_KEY } from "@api/Endpoints";
import { PRODUCT_LIST } from "../redux/ActionTypes";
import axios from 'axios';

export const productListAction = (data) => ({
    type: PRODUCT_LIST,
    payload: data,
})

export function productList() {
    console.log("product list action called")
    return async (dispatch, getState) => {
        const url = getState().loginReducer.url;
        axios.post('http://localhost:8080/api/products/getAllProducts').then(res => {
            console.log('product response ', res)
            if (res?.status === 200) {
                dispatch(productListAction({ products: res?.data }))
                // callBack(true)
            } else {
                console.log('res', res)
            }
        }).catch(err => {
            // callBack(false)
            console.log('err', err)
        })
    }
}