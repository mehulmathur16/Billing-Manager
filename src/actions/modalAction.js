import { OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL, OPEN_DELETE_MODAL, CLOSE_DELETE_MODAL, INIT_MODAL } from "../actionTypes/modalActionTypes";

const initializeModal = () => {
    return {
        type: INIT_MODAL,
    }
}

const openEditModal = () => {
    return {
        type: OPEN_EDIT_MODAL,
    }
}

const closeEditModal = () => {
    return {
        type: CLOSE_EDIT_MODAL,
    }
}

const openDeleteModal = () => {
    return {
        type: OPEN_DELETE_MODAL,
    }
}

const closeDeleteModal = () => {
    return {
        type: CLOSE_DELETE_MODAL,
    }
}



export { initializeModal, openEditModal, closeEditModal, openDeleteModal, closeDeleteModal };