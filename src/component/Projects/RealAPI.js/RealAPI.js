import React, { useEffect, useState } from 'react'
import './RealAPI.css'

const ApiUrl = "https://jsonplaceholder.typicode.com/posts"

function RealAPI() {
const [user, setUser] = useState([]);
const userHandler = async () =>{
    try {
        const response = await fetch(ApiUrl);
        const newData = await response.json()
        setUser(newData)
    } catch (error) {
        alert("Something Went Wrong Syed with API")
    }
}
useEffect(()=>{        //useEffect will prevent(stopes) from components repeat
    userHandler();
}, [])

  return (
    <div className='all-cards'>
        {user.map((item)=>{
            const {id, title, body} = item;
           return(
            <div className='user-section' key={id}>
            <div className="mt-6 w-96 block">
                <div className="mb -2 card-number">{id}</div>
                <div className="mb-2 card-title">{title}</div>
                <div className="card-body">{body}</div>
                <div className="pt-0 read-button"><button>Read More... </button></div>
            </div>
            </div>
            )
        })}
    </div>
  )
}

export default RealAPI