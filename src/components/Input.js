import React from 'react';
import './Input.css'

const Input = ({ text, result }) => {
    return (
        <div className='input-wrapper'>
            <div className='calculation'>
                <h4>{text}</h4>
            </div>
            <div className='result'> 
                <h1>{result}</h1>
            </div>
        </div>
    )
}

export default Input;