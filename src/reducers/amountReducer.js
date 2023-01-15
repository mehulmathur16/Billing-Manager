import { ADD_BILL_AMOUNT, EDIT_BILL_AMOUNT, DELETE_BILL_AMOUNT, INIT_AMOUNT } from "../actionTypes/amountActionTypes";

const initialState = {
    totalAmount: 0,
    budget: 36000,
};

export const amountReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_AMOUNT:
            return {
                ...state,
                totalAmount: 0,
            };
        case ADD_BILL_AMOUNT:
            return {
                ...state,
                totalAmount: state.totalAmount + action.payload.amount,
            };

        case DELETE_BILL_AMOUNT:
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload.amount,
            };
        case EDIT_BILL_AMOUNT:
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload.oldAmount + action.payload.newAmount,
            };
        default:
            return state;
    }
};