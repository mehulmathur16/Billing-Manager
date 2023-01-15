import React from 'react';
import { NotificationManager } from 'react-notifications';
import '../styles/editform.scss';

function EditForm({ setEditModal, editDetails, bills, totalAmount, monthlyBilling, setBills, setEditDetails, setOriginalBills, setTotalAmount, setMonthlyBilling }) {
    const { id, description, category, amount, date } = editDetails;

    const initialState = {
        "id": bills.length + 1,
        "description": "",
        "category": "",
        "amount": '',
        "date": ""
    };

    const handleClose = () => {
        document.getElementsByClassName('home__body-container')[0].style.opacity = 1.0;
        setEditModal(false);
        setEditDetails(initialState);
    }

    const handleSubmit = () => {
        const newDescription = document.getElementById('description').value;
        const newCategory = document.getElementById('category').value;
        const newAmount = parseInt(document.getElementById('amount').value);
        const newDate = document.getElementById('date').value;

        var newBillData = bills;
        var newMonthlyBilling = monthlyBilling;
        const convertedDate = newDate.substr(5, 2) + "-" + newDate.substr(8, 2) + "-" + newDate.substr(0, 4);

        const newData = {
            "id": id,
            "description": newDescription,
            "category": newCategory,
            "amount": newAmount,
            "date": convertedDate,
        }

        if (description === '') {
            newMonthlyBilling[parseInt(convertedDate.substr(0, 2)) - 1] += newData.amount;
            setMonthlyBilling(newMonthlyBilling);
            setBills([...bills, newData]);
            setTotalAmount(totalAmount + newData.amount);
            setOriginalBills([...bills, newData]);

            NotificationManager.success('', 'Bill Added Successfully!', 1500);

            handleClose();
            return;
        }

        var index = -1

        for (var i = 0; i < newBillData.length; i++) {
            if (newBillData[i].id === id) {
                index = i;
                break;
            }
        }

        newMonthlyBilling[parseInt(newBillData[index].date.substr(0, 2)) - 1] -= newBillData[index].amount;
        newMonthlyBilling[parseInt(newData.date.substr(0, 2)) - 1] += newData.amount;
        setMonthlyBilling(newMonthlyBilling);

        setTotalAmount(totalAmount + newData.amount - newBillData[index].amount);
        newBillData[index] = newData;
        setBills(newBillData);
        setOriginalBills(newBillData);

        NotificationManager.success('', 'Bill Edited Successfully!', 1500);

        handleClose();
    }

    return (
        <div className='edit-form__container'>
            <div className='edit-form__field-container'>
                <div className='edit-form__field-input'>Enter Description</div>

                <div><input id='description' defaultValue={description}></input></div>
            </div>

            <div className='edit-form__field-container'>
                <div className='edit-form__field-input'>Select Category</div>

                <div>
                    <select id='category' defaultValue={category}>
                        <option value={''} hidden>Select Category</option>
                        <option value={'Food & Dining'}>Food &#38; Dining</option>
                        <option value={'Utility'}>Utility</option>
                        <option value={'Shopping'}>Shopping</option>
                        <option value={'Education'}>Education</option>
                        <option value={'Personal Care'}>Personal Care</option>
                        <option value={'Travel'}>Travel</option>
                    </select>
                </div>
            </div>

            <div className='edit-form__field-container'>
                <div className='edit-form__field-input'>Enter Amount</div>

                <div><input id='amount' defaultValue={amount}></input></div>
            </div>

            <div className='edit-form__field-container'>
                <div className='edit-form__field-input'>Select Date</div>

                <div><input id='date' type={'date'} defaultValue={date.substr(6, 4) + "-" + date.substr(0, 2) + "-" + date.substr(3, 2)}></input></div>
            </div>

            <div className='edit-form__button-container'>
                <div>
                    <button className='edit-form__submit-button' onClick={handleSubmit}>Submit</button>
                </div>

                <div>
                    <button className='edit-form__close-button' onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default EditForm;