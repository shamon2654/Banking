import { configureStore } from "@reduxjs/toolkit"// configureStore is using to create store
import accountReducer from "./Components/Features/Accounts/AccountSlice"
import customerReducer from "./Components/Features/Customers/CustomerSlice"
//persist
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"


// const rootReducer = combineReducers({
//     account: accountReducer,
//     customer:customerReducer,
// })//multiple reducers combin  a veriable using combineReducers

// const store = createStore(rootReducer,applyMiddleware(thunk))//creteStore can  access only one value,first define  rootreducer ,second any middile ware in there

const persistConfig = {
  key: "root",//key root get from main.js root
  storage,
}

const persistAccountReducer = persistReducer(persistConfig,accountReducer);
const persistCustomerReducer = persistReducer(persistConfig,customerReducer);


const store = configureStore({
  reducer: {
    account: persistAccountReducer,
    customer: persistCustomerReducer,
  },
})

const persistor=persistStore(store)

export  {store,persistor}
