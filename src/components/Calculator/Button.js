import React from 'react';
import './Button.css'

const Button = ({ symbol, color, handleClick, calculator, className }) => {
    return (
        <div 
            className={`button ${className}`} 
            onClick={() => handleClick(calculator)}
            style={{ backgroundColor: color }}>
                {symbol}
        </div>
    )
}

export default Button;