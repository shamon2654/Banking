import { createSlice } from "@reduxjs/toolkit";

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createAt:""
}

const customerReducer = createSlice({
    name: 'customer',
    initialState: initialStateCustomer,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return {
                    payload: {
                        fullName,
                        nationalID,
                        createAt:new Date().toISOString(),
                    }
                }
            },
            reducer(state, action) {
            state.fullName = action.payload.fullName
            state.nationalID = action.payload.fullName
            state.createAt=action.payload.createAt
            }
        },
        updateName(state, action) {
            state.fullName=action.payload
        }
    }
})

export const{createCustomer,updateName}=customerReducer.actions
export default customerReducer.reducer
