import { combineReducers } from "redux"
import {loginReducer} from '../reducers/LoginReducer'
import {productsReducer} from '../reducers/ProductsReducer'

const rootReducer = combineReducers({
    loginReducer,
    productsReducer
})

export default rootReducer