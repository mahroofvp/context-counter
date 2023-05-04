import {React, useContext} from 'react'
import "./counter.css"
import { CounterContext } from '../../context/CounterContext'

export const Counter = () => {

    const {count} = useContext(CounterContext)
    console.log(count);
  return (
    <div>
        <div  className={`${count < 0 ?"red": count >0?"green": "count-div"}`}>
      <h1>{count}</h1>
      </div>
    </div>
  )
}

