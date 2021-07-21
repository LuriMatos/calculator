import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css'
import Button from './Button'
import Input from './Input'

const Calculator = ({ calculations, setCalculations }) => {

    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    const symbolsSet = new Set (['+', '-', '*', '/']);

    const numberSelection = (sel) => {
        setText((number) => number + sel);
    };

    const clearCalculator = () => {
        setText('');
        setResult('');
    }

    const calcResult = () => {
        const lastText = text.slice(-1);

        if(text.length > 0 && text.length < 23 && !symbolsSet.has(lastText)) {
            const input = text;
            setResult(evaluate(input));
            setCalculations(calculations + 1);
        }
    }

    return (
        <div className='calculator-bg'>
            <div className='calculator-area'>
                <div className='input'>
                    <Input text={text} result={result} />
                </div>
                <div className='button-clear'>
                    <Button symbol='AC' color='#181818' handleClick={clearCalculator} className='grower' />
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
                    <Button symbol='0' calculator='0' color='#5F6062' className='grower2' handleClick={numberSelection}/>
                    <Button symbol='.' calculator='.' color='#5F6062' handleClick={numberSelection}/>
                    <Button symbol='=' color='#FF9F0C' handleClick={calcResult}/>
                </div>
            </div>
        </div>
    )
}

export default Calculator;