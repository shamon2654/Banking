const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createAt:""
}



//customer function
export default function customerReducer(state=initialStateCustomer,action) {
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


//customer actoin creator

export function createCustomer(fullName,nationalID) {
    return {
        type: "customer/createCustomer",
        payload: {
            fullName: fullName,
            nationalID: nationalID,
            createAt:new Date().toISOString(),
        },
    }
}

export function updateName(fullName) {
    return { type: 'customer/updateName', payload: fullname }
}