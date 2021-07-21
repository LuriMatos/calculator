import React from 'react';
import './Input.css'

const Input = ({ text, result }) => {
    if(text.length < 23 && result.toString().length < 12) {
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
    } else if(text.length < 23) {
        return (
            <div className='input-wrapper'>
                <div className='calculation'>
                    <h4>{text}</h4>
                </div>
                <div className='result'> 
                    <h3>{result}</h3>
                </div>
            </div>
        )
    } else {
        return (
            <div className='input-wrapper'>
                <div className='calculation'>
                    <h4>Oh... This is over my limit. Please clear and try again!</h4>
                </div>
            </div>
        )
    }
}

export default Input;