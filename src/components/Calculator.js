import React from 'react';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css'
import Button from './Button'
import Input from './Input'

const Calculator = () => {

    const [text, setText] = useState('');
    const [result, setResult] = useState('');

    const numberSelection = (sel) => {
        setText((number) => [...number, sel + ' ']);
    };

    const clearCalculator = () => {
        setText('');
        setResult('');
    }

    const calcResult = () => {
        const input = text.join('');
        setResult(evaluate(input));
    }

    return (
        <div className='calculator-bg'>
            <div className='calculator-area'>
                <div className='input'>
                    <Input text={text} result={result}/>
                </div>
                <div className='button-wrapper'>
                    <Button symbol='AC' color='#181818' handleClick={clearCalculator} />
                    <Button symbol='÷' calculator='/' color='#FF9F0C' handleClick={numberSelection}/>
                </div>
                <div className='button-wrapper '>
                    <Button symbol='7' calculator='7' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='8' calculator='8' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='9' calculator='9' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='×' calculator='*' color='#FF9F0C' handleClick={numberSelection}/>
                </div>
                <div className='button-wrapper'>
                    <Button symbol='4' calculator='4' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='5' calculator='5' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='6' calculator='6' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='-' calculator='-' color='#FF9F0C' handleClick={numberSelection}/>
                </div>
                <div className='button-wrapper'>
                    <Button symbol='1' calculator='1' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='2' calculator='2' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='3' calculator='3' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='+' calculator='+' color='#FF9F0C' handleClick={numberSelection}/>
                </div>
                <div className='button-wrapper'>
                    <Button symbol='0' calculator='0' color='#5F6062' className='zero' handleClick={numberSelection}/>
                    <Button symbol='.' calculator='.' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='=' color='#FF9F0C' handleClick={calcResult}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator;