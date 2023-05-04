import {React, useContext } from 'react'
import './button.css'
import { CounterContext } from '../../context/CounterContext'
export const Button = () => {
    const  {decrement, increment} = useContext(CounterContext)


  return (
    <div className='btn'>
      <button className='minusbtn' onClick={decrement}>-</button> 
      <button  className='plusbtn' onClick={increment}>+</button>
      </div>
  )
}

 