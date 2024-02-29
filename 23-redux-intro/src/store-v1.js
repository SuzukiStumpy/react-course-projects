import { combineReducers, createStore } from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};

const initialStateCustomer = {
    name: '',
    nationalId: '',
    createdAt: ''
}


function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload };
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload };
        case 'account/requestLoan':
            if (state.loan > 0) return state;
            // Later
            return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose, balance: state.balance + action.payload.amount };
        case 'account/repayLoan':
            return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan };

        default:
            return state;
    }
}

function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return { ...state, name: action.payload.name, nationalId: action.payload.nationalId, createdAt: action.payload.createdAt };
        case 'customer/updateName':
            return { ...state, name: action.payload };
        default:
            return state;
    }
}

const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer });
const store = createStore(rootReducer);

// store.dispatch({ type: 'account/deposit', payload: 500 });
// store.dispatch({ type: 'account/withdraw', payload: 300 });
// console.log(store.getState());

// store.dispatch({ type: 'account/requestLoan', payload: { amount: 1000, purpose: 'Buy a car' } });
// console.log(store.getState());
// store.dispatch({ type: 'account/repayLoan' });
// console.log(store.getState());

function deposit(amount) { return { type: 'account/deposit', payload: amount } };
function withdraw(amount) { return { type: 'account/withdraw', payload: amount } }
function requestLoan(amount, purpose) { return { type: 'account/requestLoan', payload: { amount: amount, purpose: purpose } } }
function payLoan() { return { type: 'account/repayLoan' } }

// console.log('Resetting store');
// store.dispatch({ type: 'reset' });

store.dispatch(deposit(500));
store.dispatch(withdraw(300));
console.log(store.getState());

store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(name, nationalId) {
    return { type: 'customer/createCustomer', payload: { name: name, nationalId: nationalId, createdAt: new Date().toISOString() } };
}

function updateName(name) {
    return { type: 'customer/updateName', payload: name };
}

store.dispatch(createCustomer('Mark', '123456'));
console.log(store.getState());
store.dispatch(updateName('bernard'));

console.log(store.getState());
