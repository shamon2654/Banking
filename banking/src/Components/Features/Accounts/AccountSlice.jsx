const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading:false
};



//account function
export default function accountReducer(state=initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return {
                ...state,
                balance: state.balance + action.payload,
                isLoading: false,
            };
        case "account/convertingCurrency":
            return {
                ...state,
                isLoading:true
            }
        case 'account/withdraw':
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case 'account/requestLoan':
            if (state.loan > 0) {
                return state;
            }
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose:action.payload.purpose,balance:state.balance+action.payload.amount,
            };
        case 'account/payloan':
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan,
            };
        default:
            return state;

    }
}



//action creators account
export function deposit(amount,currency) {
    if (currency == "INR") return { type: "account/deposit", payload: amount };
    return async function (dispatch, getState) {
        dispatch({type:"account/convertingCurrency"})
        //api call
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=INR`)
        const data = await res.json()
        const converted = data.rates.INR
        dispatch({type:"account/deposit",payload:converted})
    }
}

export function withdraw(amount) {
    return{type:'account/withdraw',payload:amount}
}

export function requestLoan(amount,purpose) {
    return {
        type: 'account/requestLoan',
        payload: { amount:amount,purpose:purpose, }
    }
}

export function payloan(amount) {
    return{type:'account/payloan' }
}


