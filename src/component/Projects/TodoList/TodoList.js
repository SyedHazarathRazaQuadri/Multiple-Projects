import React, { useState, useEffect } from 'react'

function TodoList() {
    // let [time, setTime] = useState(0)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setTime((time => time + 1))
    //     }, 1000)
    // })

    const [userData, setUserData] = useState('');           //here in this state typed data will show directly
    const getUserDetails = (event) =>{
            setUserData(event.target.value)
    }

    const [showDetails, setShowDetails] = useState()        //here in this state typed data will show when you click on button
    const showData = (e) =>{
        e.preventDefault();                //this preventDefault() will prevent from page refresh
        setShowDetails(userData)
    }
  return (
    <div className='text-center'>
        <h1 className='text-center text-6xl font-bold text-yellow-500 underline'>My Todo List</h1>
        <form onSubmit={showData}>
            <input className='px-3 py-2 mt-10' type="text" placeholder='Add your Task' onChange={getUserDetails} />
            <button className='rounded-xl bg-blue-500 text-white ml-4 px-5 py-2' type='submit'>Add</button>
        </form>
        <ul><li>{showDetails}</li></ul>
        {/* <h1 className='text-center text-6xl'>I am rendered {time} times</h1> */}
    </div>
  )
}

export default TodoList