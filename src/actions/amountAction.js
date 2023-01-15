import { ADD_BILL_AMOUNT, EDIT_BILL_AMOUNT, DELETE_BILL_AMOUNT, INIT_AMOUNT } from "../actionTypes/amountActionTypes";

const initializeBillAmount = () => {
    return {
        type: INIT_AMOUNT,
    }
}

const addBillAmount = (amount) => {
    return {
        type: ADD_BILL_AMOUNT,
        payload: { amount },
    };
};

const deleteBillAmount = (amount) => {
    return {
        type: DELETE_BILL_AMOUNT,
        payload: { amount },
    };
};

const editBillAmount = (oldAmount, newAmount) => {
    return {
        type: EDIT_BILL_AMOUNT,
        payload: {
            oldAmount,
            newAmount,
        }
    };
};

export { addBillAmount, editBillAmount, deleteBillAmount, initializeBillAmount };