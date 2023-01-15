import React, { useState, useEffect } from 'react';

import BillCard from './BillCard';
import EditForm from './EditForm';
import DeleteModal from './DeleteModal';
import BillingChart from './BillingChart';

import AddIcon from '@mui/icons-material/Add';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

import '../styles/home.scss';

function Home({ originalBills, setOriginalBills }) {

    const [bills, setBills] = useState(originalBills);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [totalAmount, setTotalAmount] = useState(0);
    const [budget, setBudget] = useState(36000);
    const [monthlyBilling, setMonthlyBilling] = useState([]);

    const initialState = {
        "id": originalBills.length + 1,
        "description": "",
        "category": "",
        "amount": '',
        "date": ""
    };

    const calculateAmount = () => {
        let sum = 0;

        originalBills.map((curr) => {
            sum += curr.amount;
        });

        setTotalAmount(sum);
    }

    const calculateMonthlyBilling = () => {
        let expenses = Array(12).fill(0);

        originalBills.map((curr) => {
            const monthNumber = parseInt(curr.date.substr(0, 2));
            expenses[monthNumber - 1] += curr.amount;
        });

        setMonthlyBilling(expenses);
    }

    const calculateMinBills = () => {
        var duplicateArray = originalBills;

        duplicateArray.sort(function (first, second) {
            if (first.amount > second.amount) {
                return -1;
            }

            if (first.amount < second.amount) {
                return 1;
            }

            return 0;
        });

        let budgetCopy = budget;
        let idsThatCanBePaid = [];

        duplicateArray.map((curr) => {
            if (budgetCopy - curr.amount >= 0) {
                budgetCopy -= curr.amount;
                curr.canBePaid = true;
                idsThatCanBePaid.push(curr.id);
            }
            else if (curr.canBePaid) {
                curr.canBePaid = false;
            }
        });

        let duplicateOriginalBills = originalBills;

        duplicateOriginalBills.map((curr) => {
            if (idsThatCanBePaid.includes(curr.id)) {
                curr.canBePaid = true;
            }
        });

        setOriginalBills(duplicateOriginalBills);
    }

    useEffect(() => {
        calculateAmount();
        calculateMonthlyBilling();
        calculateMinBills();
    }, []);

    const [editDetails, setEditDetails] = useState(initialState);

    const addBill = () => {
        document.getElementsByClassName('home__body-container')[0].style.opacity = 0.5;
        document.getElementsByClassName('home__main')[0].style.background = 'black';
        setEditModal(true);
    }

    const handleFilter = (e) => {
        var selectedBills = [];

        originalBills.map((curr) => {
            if (curr.category === e.target.value) {
                selectedBills.push(curr);
            }
        });

        setBills(selectedBills);
    }

    return (
        <div className='home__main'>

            {
                (editModal) ? (
                    <EditForm setEditModal={setEditModal} editDetails={editDetails} bills={bills} totalAmount={totalAmount} monthlyBilling={monthlyBilling} setBills={setBills} setEditDetails={setEditDetails} setOriginalBills={setOriginalBills} setTotalAmount={setTotalAmount} setMonthlyBilling={setMonthlyBilling} />
                ) : null
            }

            {
                (deleteModal) ? (
                    <DeleteModal setDeleteModal={setDeleteModal} editDetails={editDetails} bills={bills} totalAmount={totalAmount} monthlyBilling={monthlyBilling} setBills={setBills} setEditDetails={setEditDetails} setOriginalBills={setOriginalBills} setTotalAmount={setTotalAmount} setMonthlyBilling={setMonthlyBilling} />
                ) : null
            }

            <div className='home__body-container' style={{ background: 'white' }}>
                <div style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1>Monthly Billing Insight</h1>
                </div>

                <div className='home__chart-container' style={{ background: 'white' }}>
                    <BillingChart monthlyBilling={monthlyBilling} />
                </div>

                <div style={{ display: 'flex', }}>
                    <div style={{ background: 'white', padding: '1.2rem' }}>
                        <div className='home__amount-container' >
                            <div className='home__amount-heading'>
                                Total Amount:
                            </div>

                            <div className='home__amount-value'>
                                {totalAmount}.00 INR
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'white', padding: '1.2rem' }}>
                        <div className='home__amount-container' >
                            <div className='home__amount-heading'>
                                Budget:
                            </div>

                            <div className='home__amount-value'>
                                {budget}.00 INR
                            </div>
                        </div>
                    </div>

                </div>

                <div className='home__add-and-filter-container' style={{ background: 'white' }}>
                    <div className='home__add-incvoice-container' onClick={addBill}>
                        <div className='home__add-invoice-heading'>
                            New Invoice
                        </div>

                        <div>
                            <AddIcon />
                        </div>
                    </div>

                    <div>
                        <select className='home__sort-select' defaultValue={''} onChange={(event) => handleFilter(event)}>
                            <option value={''} hidden>Filter By Category</option>
                            <option value={'Food & Dining'}>Food &#38; Dining</option>
                            <option value={'Utility'}>Utility</option>
                            <option value={'Shopping'}>Shopping</option>
                            <option value={'Education'}>Education</option>
                            <option value={'Personal Care'}>Personal Care</option>
                            <option value={'Travel'}>Travel</option>
                        </select>
                    </div>

                    <div style={{ display: 'flex', padding: '1.2rem' }}>
                        <RotateLeftIcon style={{ cursor: 'pointer' }} onClick={() => {
                            document.getElementsByClassName('home__sort-select')[0].value = '';
                            setBills(originalBills);
                        }} />
                    </div>
                </div>

                <div style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', padding: '1.5rem' }}>
                    <h3>* Minimum Bills that can be paid under budget are represented with 🔥</h3>
                </div>

                <div className='home__cards-container' >
                    {
                        (bills) ? (
                            bills.map((curr) => {
                                return <BillCard details={curr} key={curr.id} setEditModal={setEditModal} setEditDetails={setEditDetails} setDeleteModal={setDeleteModal} />;
                            })
                        ) : null
                    }
                </div >
            </div>
        </div>
    )
}

export default Home;