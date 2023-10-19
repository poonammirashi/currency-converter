import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
      key:'value',
      num: 123
  }

  const arr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>Tailwind Test</h1>
    <Card name='poonam' btnText='click me'/>
    <Card name='Gautam'  />
    
  </>
  )
}

export default App
