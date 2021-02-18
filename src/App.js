import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';


function App() {
  const [inputNumber1, setInputNumber1] = useState();
  const [inputNumber2, setInputNumber2] = useState();
  const [inputResult, setInputResult] = useState();

  function runToast(message){
    toast(`${message}`, {
      position: "top-center",
      autoClose: 1500, 
      type: "success"
    })
  }

  function sum(e){
    e.preventDefault();
    setInputResult(inputNumber1+inputNumber2);
    runToast("Calculation performed successfully!");
  }

  function onChange(number){
    switch (true) {
      case number === 1:
        const number1 = document.getElementById("number1");
        setInputNumber1(+number1.value)
        break;
      case number === 2:
        const number2 = document.getElementById("number2");
        setInputNumber2(+number2.value)
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      <div>
        <form onSubmit={sum} className="calculator">
          <label htmlFor="number1">Insert a number</label>
          <input 
            type="number" 
            id="number1" 
            onChange={() => onChange(1)}
          />
          
          <label htmlFor="number2">Insert another number</label>
          <input 
            type="number" id="number2" 
            onChange={() => onChange(2)}/>
          <label htmlFor="result">Result</label>

          <input 
            type="text" id="result" 
            value={inputResult} disabled 
            onChange={() => onChange(0)}
          />
          <button type="submit">Calcular</button>
        </form>
      </div>
    </div>
  );
}

export default App;
