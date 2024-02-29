import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    nationalId: '',
    createdAt: ''
}

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer: {
            prepare(name, nationalId) {
                return { payload: { name, nationalId, createdAt: new Date().toISOString() } }
            },
            reducer(state, action) {
                state.name = action.payload.name;
                state.nationalId = action.payload.nationalId;
                state.createdAt = action.payload.createdAt;
            }
        },
        updateName(state, action) {
            state.name = action.payload;
        }
    }
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;


/* export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return { ...state, name: action.payload.name, nationalId: action.payload.nationalId, createdAt: action.payload.createdAt };
        case 'customer/updateName':
            return { ...state, name: action.payload };

        default:
            return state;
    }
}

export function createCustomer(name, nationalId) {
    return { type: 'customer/createCustomer', payload: { name: name, nationalId: nationalId, createdAt: new Date().toISOString() } };
}

export function updateName(name) {
    return { type: 'customer/updateName', payload: name };
}
 */
