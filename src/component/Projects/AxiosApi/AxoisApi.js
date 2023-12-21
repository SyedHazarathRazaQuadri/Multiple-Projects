import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AxiosAPI() {
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        const userHandler = async()=>{
            try {
                const Response = await axios.get('https://reqres.in/api/users?page=2');
                setUserData(Response.data.data);
            } catch (error) {
                console.error("Kuch tho galat hai", error);
            }
        }
        userHandler();
    })
// useEffect(()=>{
//     new Promise((resolve, reject)=>{
//         const Response = axios.get('https://reqres.in/api/users?page=2');
//         if (Response !== '') {
//             resolve(Response);
//         }else{
//             reject();
//         }
//     }).then((item)=>{
//         setUserData(item.data.data);
//     }).catch((error)=>{
//         console.error("Something galat hai", error);
//     })
// })

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Axios API integration</h1>
      <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {userData.map((item)=>{
            const {id, first_name, last_name, email, avatar} = item;
            return(
                <li style={{border: '1px solid darkblue', padding: '10px', flexBasis: '33%'}} key={id}>
                <p>Name: {first_name} {last_name}</p>
                <p>Email:{email} </p>
                <img src={avatar} alt={`Avatar of ${first_name}`} />
            </li>
            )
        })}
      </ul>
    </div>
  )
  }

export default AxiosAPI