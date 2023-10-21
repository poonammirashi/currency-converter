import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center top-10 inset-x-5 px-2'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"red"}} 
          onClick={()=> setColor("red")}
          >Red</button>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"blue"}}
          onClick={()=> setColor("blue")}
          >Blue</button>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"black"}}
          onClick={()=> setColor("black")}
          >Dark</button>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"#aa55aa"}}
          onClick={()=> setColor("#aa55aa")}
          >Pink</button>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"olive"}}
          onClick={()=> setColor("olive")}
          >Olive</button>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"yellow"}}
          onClick={()=> setColor("yellow")}
          >Yellow</button>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"orange"}}
          onClick={()=> setColor("orange")}
          >Orange</button>
          <button className='outline-none rounded-full shadow-lg px-4 py-1 text-white'
          style={{backgroundColor:"grey"}}
          onClick={()=> setColor("grey")}
          >grey</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
