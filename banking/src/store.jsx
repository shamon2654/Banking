import {combineReducers, createStore} from "redux"

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createAt:""
}

function accountReducer(state=initialStateAccount, action) {
    switch (action.type) {
        case 'account/deposit':
            return {
                ...state,
                balance: state.balance + action.payload
            };
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
                balance: state.balance - loan,
            };
        default:
            return state;

    }
}

function customerReducer(state=initialStateCustomer,action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createAt: action.payload.createAt,
            };
        case 'customer/updateName':
            return {
                ...state,
                fullName: action.payload
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    customer:customerReducer,
})

const store = createStore(rootReducer)//it access only one value




//action creators
function deposit(amount) {
    return{type:'account/deposit',payload:amount}
}

function withdraw(amount) {
    return{type:'account/withdraw',payload:amount}
}

function requestLoan(amount,purpose) {
    return {
        type: 'account/requestLoan',
        payload: { amount:amount,purpose:purpose, }
    }
}

function payloan(amount) {
    return{type:'account/payloan'}
}

//customer actoin creator

function createCustomer(fullName,nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName: fullName,
            nationalID: nationalID,
            createAt:new Date().toISOString(),
        },
    }
}

function updateName(fullName) {
    return { type: 'customer/updateName', payload: fullname }
}


store.dispatch(createCustomer('shamon', 142536775))
console.log(store.getState())