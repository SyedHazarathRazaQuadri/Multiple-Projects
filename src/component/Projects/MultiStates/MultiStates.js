import axios from 'axios'
import React, { useEffect, useReducer } from 'react'

// const fetchLoad = "FetchLoading";
// const fetchSuccess = "FetchSuccess";
// const fetchError = "FetchError";
const dataLoad = "dataLoad";
const dataDisplay = "dataCame";
const dataError = "dataError";

const initialData = {
    loading: true,
    data: null,
    error: null
}

// const initialStateValue = {
//     loading: true,
//     data: null,
//     error: null
// }
// const reducerFunction = (state, action)=>{
//      switch (action.type) {
//          case fetchLoad:
//              return {...state, loading:true, error:null}
//          case fetchSuccess:
//              return {...state, loading:false, data: action.payload}
//          case fetchError:
//              return {...state, loading:false, error: action.payload}
//          default:
//              return state;
//      }
// }
const reducerKaNewFunc = (state, action)=>{
    switch (action.type) {
        case dataLoad:
            return {...state, loading: true, error:null}
        case dataDisplay:
            return {...state, loading: false, data: action.payload}
        case dataError:
            return {...state, loading: false, error: action.payload}
        default:
    }
}

function MultiStates() {
    // const [state, dispatch] = useReducer(reducerFunction, initialStateValue);
    const [fullData, dispatch] = useReducer(reducerKaNewFunc, initialData);
    useEffect(()=>{
        const fullDataHandler = async()=>{
            try {
                dispatch({type: dataLoad})
                const apiData = await fetch('https://jsonplaceholder.typicode.com/photos');
                const newData = await apiData.json();
                dispatch({type: dataDisplay, payload: newData})
            } catch (error) {
                dispatch({type: dataError, payload: error})
            }
        }
        fullDataHandler();
    },[])
        // const apiDataHandler = async()=>{
        //     try {
        //         dispatch({type: fetchLoad})
        //         const apiData = await fetch('https://jsonplaceholder.typicode.com/photos');
        //         const newData = await apiData.json()
        //         dispatch({type: fetchSuccess, payload:newData})
        //     } catch (error) {
        //         dispatch({type: fetchError});
        //     }
        // }
        // useEffect(()=>{
        //     apiDataHandler();
        // },[]);
  return (
    <>
        {fullData.loading && <h1>Loading....</h1>}
        {fullData.data && 
            <div>
                {fullData.data.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })}
                
            </div>
        }
        {fullData.error && <h2>{alert(fullData.error)}</h2>}
        {/* <div>
            {state.loading && <h1>Loading....</h1>}
            {state.data && 
            (
            <div>
                {state.data.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })}
            </div>
            )}
        </div> */}
    </>
  )
}

export default MultiStates