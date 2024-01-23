import { combineReducers, createStore } from "redux"
import accountReducer from "./Components/Features/Accounts/AccountSlice"
import customerReducer from "./Components/Features/Customers/CustomerSlice"


const rootReducer = combineReducers({
    account: accountReducer,
    customer:customerReducer,
})//multiple reducers combin  a veriable using combineReducers

const store = createStore(rootReducer)//creteStore can  access only one value


export default store;