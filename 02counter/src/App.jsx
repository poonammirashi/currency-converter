import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15); // counter and setCounter can be different names.useState is a hook.in that we can pass anything like arr,string,object etc.

  // let counter = 15;

  const addvalue = () => {
    if(counter<20){
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>counter value {counter}</h2>
      <button
      onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
