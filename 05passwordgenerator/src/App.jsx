import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=> {
    let pass= "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) {
      str += "0123456789" ;
    }
    if(charAllowed){
      str=str + "!@#$%^&*()[]\{}?";
    }

    for(let i=0;i<length;i++){
      const char= Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,charAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password])

 useEffect(()=>{
  passwordGenerator();
 }, [numberAllowed,charAllowed,length,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto bg-gray-700 
      px-4 my-8 shadow-md rounded-lg text-orange-600 '>
        <h1 className='text-lg text-white text-center py-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
          value={password} 
          placeholder='password' 
          readOnly 
          ref={passwordRef}
          className= 'bg-white w-full rounded-md px-4 py-1 h-10' />
        <button 
        onClick={copyPasswordToClipboard}
        className='bg-blue-700 rounded-md h-10 px-4 py-0.5 shrink-0 text-white focus:ring focus:ring-black'>Copy</button>
        </div>
        
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            // defaultChecked
            onChange={(e)=> {setLength(e.target.value)}}
            className='cursor-pointer bg-blue-600' />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={ () => {
                setNumberAllowed(prev => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={ () => {
                setCharAllowed(prev => !prev);
              }}
            />
            <label>Charecters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
