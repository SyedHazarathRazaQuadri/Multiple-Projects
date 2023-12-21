import React, { useEffect, useState } from 'react';
import './UniversitiesApi.css';
import axios from 'axios';

const apiUrl = "http://universities.hipolabs.com/search?country=United+States";

function UniversitiesApi() {
    // const [universitylist, setUniversitylist] = useState([]);
    const [userdata, setuserData] = useState([]);

    useEffect(()=>{
        const dataHandler = async() =>{
            const resp = await axios.get(apiUrl);
            setuserData(resp.data);
        }
        dataHandler();
    },[])
    // useEffect(()=>{
    //     const universitylistHandler = async () =>{
    //         const Response = await fetch(apiUrl);
    //         const newData = await Response.json();
    //         setUniversitylist(newData);
    //     }
    //     universitylistHandler();
    // }, [])
  return (
    <>
    <div className="all_universities">
        {userdata.map((item)=>{
            const {name, country, alpha_two_code, web_pages} = item;
            return(
            <div className="university">
                <div className="uname">{name}</div>
                <div className="country">{country}</div>
                <div className="alpha_two_code">{alpha_two_code}</div>
                <a className="web_url" href={web_pages} target="_blank"><button>Website..</button></a>
            </div>
            );
        })}
    </div>
    </>
  )
}

export default UniversitiesApi