import { OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL, INIT_MODAL } from "../actionTypes/modalActionTypes";

const initialState = {
    editModal: false,
    deleteModal: false,
};

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_MODAL:
            return {
                ...state,
                editModal: false,
                deleteModal: false,
            };
        case OPEN_EDIT_MODAL:
            return {
                ...state,
                editModal: true,
            };

        case CLOSE_EDIT_MODAL:
            return {
                ...state,
                editModal: false,
            };
        case OPEN_DELETE_MODAL:
            return {
                ...state,
                deleteModal: true,
            };

        case CLOSE_DELETE_MODAL:
            return {
                ...state,
                deleteModal: false,
            };
        default:
            return state;
    }
};