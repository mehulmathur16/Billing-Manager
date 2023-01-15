import { SET_BILL, INIT } from "../actionTypes/billActionTypes";

const initializeBill = () => {
    return {
        type: INIT,
    }
}

const setBill = (changedBills) => {
    return {
        type: SET_BILL,
        payload: { changedBills },
    };
};

export { initializeBill, setBill };