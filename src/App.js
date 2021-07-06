import './App.css';
import NavBar from './components/NavBar';
import Calculator from './components/Calculator';
import { evaluate } from 'mathjs';

function App() {

  return (
    <div className='app'>
      <NavBar />
      <Calculator />
    </div>
  );
}

export default App;
