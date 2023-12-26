import React, { useState } from 'react'
import styles from './Counter.css'

document.querySelector('body').style.backgroundColor = 'white';

function Counter() {
let [counter, setCounter] = useState(0)

let addValue = () =>{
  document.querySelector('body').parentNode.style.backgroundColor = 'green';
    counter !== 20 ? counter = counter + 1 : counter = 20
    setCounter(counter)
}
let removeValue = () =>{
  document.querySelector('body').parentNode.style.backgroundColor = 'red';
    counter !== 0 ? counter = counter - 1 : counter = 0
    setCounter(counter)
}
  return (
    <>
    <div className='counter-section'>
        <div>Count is: {counter}</div>
        <input className='minus-button' type='button' value="Minus" onClick={removeValue} />
        <input className='plus-button' type='button' value="Plus" onClick={addValue} />
    </div>
    </>
  )
}

export default Counter