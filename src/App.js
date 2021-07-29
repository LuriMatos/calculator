import './App.css';
import React, { useState } from 'react';
import { particleParamsDark, particleParamsLight } from './components/Particles/Particles';
import NavBar from './components/NavBar/NavBar';
import Toggle from './components/Toggle/Toggle';
import Count from './components/Counter/Count';
import Particles from 'react-particles-js';
import Calculator from './components/Calculator/Calculator';
import Gratitude from './components/Gratitude/Gratitude';

function App() {
  const [calculations, setCalculations] = useState(0);
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div 
      className='app' 
      className={!darkToggle ? 'lightMode' : 'darkMode'}>
        <Particles 
          className='particles'
          params={!darkToggle ? particleParamsLight : particleParamsDark} />
        <NavBar />
        <Toggle 
          darkToggle={darkToggle} 
          changeDarkToggle={() => setDarkToggle(!darkToggle)} /> 
        <div>
        <Count 
            darkToggle={darkToggle}
            calculations={calculations} 
            setCalculations={setCalculations} />
          <Calculator 
            calculations={calculations} 
            setCalculations={setCalculations} />
          <Gratitude darkToggle={darkToggle}/>
        </div>
    </div>
  );
}

export default App;
