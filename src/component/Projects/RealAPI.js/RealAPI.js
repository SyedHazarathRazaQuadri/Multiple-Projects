import React, { useEffect, useState } from 'react'
import './RealAPI.css'

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

function RealAPI() {
const [user, setUser] = useState([]);

useEffect(()=>{
    const userHandler = async()=>{
        try {
            const Response = await fetch(apiUrl);
            const newData = await Response.json();
            setUser(newData);
        } catch (error) {
            console.error("Real API something wrong", error);
        }
    }
    userHandler();
},[]);
  return (
    <div className='all-cards'>
        {user.map((item)=>{
            const {id, title, body} = item;
            return(
                <div className='user-section'>
                <div className="mt-6 w-96 block" key={id}>
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