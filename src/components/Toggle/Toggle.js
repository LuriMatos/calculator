import React from 'react';
import './Toggle.css'

const Toggle = ({ darkToggle, changeDarkToggle }) => {
    return (
        <div className='toggle'>
            <label className='switch' >
                <input type='checkbox' checked={darkToggle} onChange={changeDarkToggle} />
                <span className='slider' />
            </label>
        </div>
    )
}

export default Toggle;