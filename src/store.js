import { createStore } from "redux";
import { combineReducers } from "redux";
import { amountReducer } from "./reducers/amountReducer";
import { modalReducer } from "./reducers/modalReducer";
import { billReducer } from "./reducers/billReducer";

const rootReducer = combineReducers({
    amount: amountReducer,
    modal: modalReducer,
    billData: billReducer,
});

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;