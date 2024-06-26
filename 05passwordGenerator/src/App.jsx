import { useState, useCallback, useEffect, useRef } from 'react'
 


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //ref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed) str+= "!@#$%^&*()+_[]{}~`-"

    // eslint-disable-next-line no-undef
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])
  const copyPasswordToClip = useCallback(() => {
    passwordRef
    window.navigator.clipboard.writeText(password)
  },[password])
    useEffect(() => {passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
  <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-center font-bold text-white my-3'>Generate a random Password</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-5'>
    <input type='text'
    value={password}
    className='outline-none w-full py-1 px-4 font-extrabold '
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button
     onClick={copyPasswordToClip}
    className='outline-none bg-emerald-300 text-white px-3 py-1.5 '>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange = {(e) => {setLength(e.target.value)}}
      />
      <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox'
        defaultChecked={numberAllowed}
        
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
        <input 
        type='checkbox'
        defaultChecked={charAllowed}
        
        id="charInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor='charInput'>Characters</label>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
