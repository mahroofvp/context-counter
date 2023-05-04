
import { React, useContext } from 'react'
import './App.css'
import { Button } from './components/buttons/Button'
import { Counter } from './components/counterScreen/Counter'
import { CounterContext } from '../src/context/CounterContext'

function App() {
  const  {increment,decrement} = useContext(CounterContext)


  return (
    <div className='main-div'>
      <div className='container-div'>

      <Button btnTxt={"-"}  actions={decrement}/>
      <Counter/>
      <Button btnTxt={"+"} actions={increment}/>
      
      </div>
     
    </div>
  )
}

export default App
