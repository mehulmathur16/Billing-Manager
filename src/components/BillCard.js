import React from 'react';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EventIcon from '@mui/icons-material/Event';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import '../styles/card.scss';

function BillCard({ details, setEditModal, setEditDetails, setDeleteModal }) {
    const { description, category, amount, date } = details;

    const canBePaid = (details.canBePaid) ? details.canBePaid : null;

    const handleModal = () => {
        document.getElementsByClassName('home__body-container')[0].style.opacity = 0.5;
        document.getElementsByClassName('home__main')[0].style.background = 'black';
        setEditDetails(details);
    }

    return (
        <div className='card-main'>
            <div className='card-main__description'>
                <div>
                    {description}
                </div>

                {canBePaid ? (
                    <div>
                        🔥
                    </div>
                ) :
                    null}
            </div>

            <div className='card-main__category'>
                {category}
            </div>

            <div className='card-main__icon-detail-container'>
                <div className='card-main__icon'> <CurrencyRupeeIcon style={{ color: "grey", fontSize: "1.3em" }} /> </div>
                <div className='card-main__icon-description'> {amount}.00 INR </div>
            </div>

            <div className='card-main__icon-detail-container'>
                <div className='card-main__icon'> <EventIcon style={{ color: "grey", fontSize: "1.3em" }} /> </div>
                <div className='card-main__icon-description'> {date} </div>
            </div>

            <div className='card-main__edit-delete-container'>
                <div className='card-main__edit-icon-container' onClick={() => {
                    handleModal();
                    setEditModal(true);
                }}>
                    <BorderColorRoundedIcon style={{ color: 'rgb(255, 151, 0)' }} />
                </div>

                <div className='card-main__delete-icon-container' onClick={() => {
                    handleModal();
                    setDeleteModal(true);
                }}>
                    <DeleteRoundedIcon style={{ color: 'rgb(241, 46, 70)' }} />
                </div>
            </div>
        </div>
    )
}

export default BillCard;