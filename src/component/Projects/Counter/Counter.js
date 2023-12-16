import React, { useState } from 'react'
import styles from './Counter.css'

function Counter() {
let [counter, setCounter] = useState(0)

let addValue = () =>{
  document.querySelector('.counter-section').style.backgroundColor = 'green';
    counter !== 20 ? counter = counter + 1 : counter = 20
    setCounter(counter)
}
let removeValue = () =>{
  document.querySelector('.counter-section').style.backgroundColor = 'red';
    counter !== 0 ? counter = counter - 1 : counter = 0
    setCounter(counter)
}
  return (
    <>
    <div className='counter-section'>
        <div>Count is: {counter}</div>
        <button className='minus-button' onClick={removeValue}>Minus</button>
        <button className='plus-button' onClick={addValue}>Plus</button>
    </div>
    </>
  )
}

export default Counter