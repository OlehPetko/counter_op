import React, {useState} from 'react';
import './App.css';

import Counter from "./Counter";

const App = () => {
  const [counter, setCounter] = useState([])
  let newCounter = [...counter]
  const addCounter = () => {
    const r = Math.floor(Math.random()*100)*1
    setCounter([...counter, r])
  }
  const resetAllCounter = () => {
    setCounter([...counter].map(el=>0))
  }
  const minus = (index) => {
    newCounter[index] = newCounter[index] - 1
    setCounter(newCounter)
  }
  const plus = (index) => {
    newCounter[index] = newCounter[index] + 1
    setCounter(newCounter)
  }
  const reseteCounter = (index) => {
    newCounter[index] = 0
    setCounter(newCounter)
  }
  const deleteCounter = (index) => {
    newCounter.splice(index, 1)
    setCounter(newCounter)
  }
  const deleteAllcounter = () => {
    setCounter([...newCounter] = [])
  }
  return(
      <div className='app'>
        {counter.map((el, index) =>(
            <Counter
                count={el}
                key={index}
                index={index}
                minus={minus}
                plus={plus}
                reseteCounter={reseteCounter}
                deleteCounter={deleteCounter}
            />))}
        <button className='button' onClick={addCounter}>ADD COUNTER</button>
        <div>
          <button className='button' onClick={resetAllCounter}>RESET ALL COUNTER</button>
        </div>
        <div>
          <button className='button' onClick={deleteAllcounter}>DELETE ALL COUNTER</button>
        </div>
      </div>
  )



}
export default App
