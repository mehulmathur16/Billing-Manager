import React from 'react';
import { NotificationManager } from 'react-notifications';
import '../styles/deleteform.scss';

function DeleteModal({ setDeleteModal, bills, totalAmount, monthlyBilling, setBills, editDetails, setEditDetails, setOriginalBills, setTotalAmount, setMonthlyBilling }) {
    const { id } = editDetails;

    const initialState = {
        "id": bills.length + 1,
        "description": "",
        "category": "",
        "amount": '',
        "date": ""
    };

    const handleClose = () => {
        document.getElementsByClassName('home__body-container')[0].style.opacity = 1.0;
        setEditDetails(initialState);
        setDeleteModal(false);
    }

    const handleDelete = () => {
        const newBillingData = bills;
        var index = -1

        for (var i = 0; i < newBillingData.length; i++) {
            if (newBillingData[i].id === id) {
                index = i;
                break;
            }
        }


        var newMonthlyBilling = monthlyBilling;
        newMonthlyBilling[parseInt(newBillingData[index].date.substr(0, 2)) - 1] -= newBillingData[index].amount;
        setMonthlyBilling(newMonthlyBilling);

        setTotalAmount(totalAmount - newBillingData[index].amount);
        newBillingData.splice(index, 1);
        setBills(newBillingData);
        setOriginalBills(newBillingData);

        NotificationManager.success('', 'Bill Deleted Successfully!', 1500);

        handleClose();
    }

    return (
        <div className='delete-form__container'>
            <div className='delete-form__header'>
                Are you sure you want to delete?
            </div>

            <div className='delete-form__buttons-container'>
                <div><button className='delete-form__yes-button' onClick={handleDelete}>Yes</button></div>
                <div><button className='delete-form__no-button' onClick={handleClose}>No</button></div>
            </div>
        </div>
    )
}

export default DeleteModal;