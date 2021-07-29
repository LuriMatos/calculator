import React from 'react';
import './Count.css';

const Gratitude = ({ darkToggle }) => {
    return (
        <div className={darkToggle ? 'darkWord' : 'lightWord'}>
            <p>Thank you for visiting! If something is not working, please inform me!</p>
        </div>
    )
}

export default Gratitude;