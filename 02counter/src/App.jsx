import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20){
      setCounter(counter+1)
    }
  }
  const decreValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
  }
 return (
  <>
  <h1>Chai Aur React</h1>
  <h2>Counter Value: {counter}</h2>
  <br>
  </br>
  <button onClick={addValue} className="btn">Add Value to Counter</button>
  <br></br>
  <br />
  <button onClick={decreValue} className="btn">Decrease the value of counter</button>
  </>
 )
}

export default App
