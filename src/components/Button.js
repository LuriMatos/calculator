import React from 'react';
import './Button.css'

const Button = ({ symbol, color, handleClick, calculator }) => {
    return (
        <div 
            className='button'
            onClick={() => handleClick(calculator)}
            style={{ backgroundColor: color }}>
        {symbol}
    </div>
    )
}

export default Button;