import React from 'react';
import './Count.css';

const Count = ({ calculations, darkToggle }) => {
    return (
        <div className={darkToggle ? 'darkWord' : 'lightWord'}>
            <p>Hello! Your current calculation count is {calculations}!</p>
        </div>
    )
}

export default Count;