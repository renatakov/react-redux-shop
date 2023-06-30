import { combineReducers } from "redux";
import { createStore } from "redux";
import { authorizationReducer } from "./reducers/autorizationReducer";
import { productsReducer } from "./reducers/productsReducer";

let reducers = combineReducers({
    authorization: authorizationReducer,
    products: productsReducer
})

let store = createStore(reducers)

export default store