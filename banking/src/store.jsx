import { applyMiddleware, combineReducers, createStore } from "redux"
import {thunk} from 'redux-thunk'
import accountReducer from "./Components/Features/Accounts/AccountSlice"
import customerReducer from "./Components/Features/Customers/CustomerSlice"


const rootReducer = combineReducers({
    account: accountReducer,
    customer:customerReducer,
})//multiple reducers combin  a veriable using combineReducers

const store = createStore(rootReducer,applyMiddleware(thunk))//creteStore can  access only one value,first define  rootreducer ,second any middile ware in there 


export default store;