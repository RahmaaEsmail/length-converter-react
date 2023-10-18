/* eslint-disable no-unused-vars */
import { useState } from "react";
import Input from "./components/Input";
import inputs from './data/units';

function App() {
  const [dataUnits , setDataUnits] = useState(inputs)
  const [standardValue , setStandardValue] = useState(0);

  function updateStandardValue(value) {
       setStandardValue(value)
  }

  function handleReset() {
    setStandardValue(0)
  }

  return (
    <div className="container">
        <h1>Length Converter</h1>
        {dataUnits.map(input => <div key={input.name}><Input standardValue={standardValue} onStandardValue={updateStandardValue} data={input}/></div>)}
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App
