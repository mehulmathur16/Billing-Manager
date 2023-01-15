import { SET_BILL, INIT } from "../actionTypes/billActionTypes";

const vendorsData = [
    {
        "id": 1,
        "description": "Dominoes",
        "category": "Food & Dining",
        "amount": 430,
        "date": "01-02-2023"
    },
    {
        "id": 2,
        "description": "Car wash",
        "category": "Utility",
        "amount": 500,
        "date": "01-06-2023"
    },
    {
        "id": 3,
        "description": "Amazon",
        "category": "Shopping",
        "amount": 2030,
        "date": "01-07-2023"
    },
    {
        "id": 4,
        "description": "House rent",
        "category": "Food & Dining",
        "amount": 35900,
        "date": "01-03-2023"
    },
    {
        "id": 5,
        "description": "Tuition",
        "category": "Education",
        "amount": 2200,
        "date": "01-12-2023"
    },
    {
        "id": 6,
        "description": "Laundry",
        "category": "Personal Care",
        "amount": 320,
        "date": "01-14-2023"
    },
    {
        "id": 7,
        "description": "Vacation",
        "category": "Travel",
        "amount": 3430,
        "date": "01-18-2023"
    }
];

const initialState = {
    bills: vendorsData,
};

export const billReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                bills: vendorsData,
            };
        case SET_BILL:
            return {
                ...state,
                bills: action.payload.changedBills,
            };
        default:
            return state;
    }
};