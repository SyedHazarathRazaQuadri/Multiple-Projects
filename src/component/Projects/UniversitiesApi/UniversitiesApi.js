import React, { useEffect, useReducer } from 'react';
import './UniversitiesApi.css';


document.querySelector('body').style.backgroundColor = 'white';

const initialData = {
    loading: true,
    data: null,
    error: null
}
const dataLoading = "dataLoading"
const dataSuccess = "dataSuccess"
const dataError = "dataError"


const customReducerFunction = (state, action)=>{
    switch (action.type) {
        case dataLoading:
            return {...state, loading: true, error: false}
        case dataSuccess:
            return {...state, loading: false, data: action.payload}
        case dataError:
            return {...state, loading: false, error: action.payload}
        default: return state;
    }
}

function UniversitiesApi() {
    const [universitylist, dispatch] = useReducer(customReducerFunction, initialData)

    useEffect(()=>{
        const universitylistHandler = async () =>{
            try {
                dispatch({type: dataLoading})
                const Response = await fetch('http://universities.hipolabs.com/search?country=United+States');
                const newData = await Response.json();
                dispatch({type: dataSuccess, payload: newData})
            } catch (error) {
                dispatch({type: dataError, payload: error})
            }
        }
        universitylistHandler();
    }, [])
    console.log(universitylist);
  return (
    <>
    {universitylist.loading && 
        <div class="flex items-center flex-col justify-center h-screen">
        <div class="relative text-center">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
        <h1>Sabr Karo Data Load hora....</h1>
    </div>
    }
    {universitylist.data && 
        <div className="all_universities">
        {universitylist.data.map((item, index)=>{
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
    }
    </>
  )
}

export default UniversitiesApi