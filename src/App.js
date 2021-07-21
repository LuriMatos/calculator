import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Toggle from './components/Toggle/Toggle';
import Count from './components/Counter/Count';
import Particles from 'react-particles-js';
import Calculator from './components/Calculator/Calculator';
import Gratitude from './components/Gratitude/Gratitude';

function App() {
  const [calculations, setCalculations] = useState(0);
  const [darkToggle, setDarkToggle] = useState(false);

const particleParamsLight = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 400
      }
    }, 
    color: {
      value: '#312f20'
    },
    line_linked: {
      enable:true,
      color: '#312f20'
    },
    move: {
      enable: true,
      speed: 2
    }
  }
}

const particleParamsDark = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 400
      }
    }, 
    color: {
      value: '#EBEDE6'
    },
    line_linked: {
      enable:true,
      color: '#EBEDE6'
    },
    move: {
      enable: true,
      speed: 2
    }
  }
}

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
        <Count 
          darkToggle={darkToggle}
          calculations={calculations} 
          setCalculations={setCalculations} />
        <Calculator 
          calculations={calculations} 
          setCalculations={setCalculations} />
        <Gratitude darkToggle={darkToggle}/>
    </div>
  );
}

export default App;
