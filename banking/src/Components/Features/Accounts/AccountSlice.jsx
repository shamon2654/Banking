import { createSlice } from "@reduxjs/toolkit"

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
}

const accountSlice = createSlice({
  name: "account",
  initialState: initialStateAccount,
  reducers: {
    deposit(state, action,) {
      state.balance = state.balance + action.payload
      state.isLoading= false
    },
    convertingCurrency(state,action) {
      state.isLoading=true
    },
    withdraw(state, action) {
      state.balance -= action.payload
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose }
        }
      },
      reducer(state, action) {  
      if (state.loan > 0) return
      state.loan = action.payload.amount
      state.purpose = action.payload.purpose
      state.balance += action.payload.amount
    },
    },
      
      
    payloan(state, action) {
      state.balance -= state.loan
      state.loan = 0
      state.purpose = ""
    },
  },
})

export const {  withdraw, requestLoan, payloan } = accountSlice.actions
//using tung in redux toolkit
export function deposit(amount,currency) {
  if (currency === "INR") return { type: 'account/deposit', payload: amount }
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" })
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`);
    const data = await res.json();
    const converted = data.rates.INR;
    dispatch({ type: "account/deposit", payload: converted })
  }
}
export default accountSlice.reducer

