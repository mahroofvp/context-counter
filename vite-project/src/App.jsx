import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incriment = ()=>{
    setCount(count+1)
  }
  const decrement = ()=>{
    setCount(count-1)
  }
  

  return (
    <div className='main-div'>
      <div  className='count-div '>
      <h1>{count }</h1>
      </div>
      <div className='btn'>
      <button className='minusbtn' onClick={decrement}>-</button> 
      <button  className='plusbtn' onClick={incriment}>+</button>
      </div>
    </div>
  )
}

export default App
