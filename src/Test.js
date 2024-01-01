import React, { useEffect } from 'react'
import TestData from './Test.json'

function Test() {

  return (
    <>
    <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'space-between', padding: '1rem'}}>
        <div>
        <select>Select Option
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>
        </div>
        <div>
            <select>Select Option
                <option value="COMPLETED">COMPLETED</option>
                <option value="PENDING">PENDING</option>
            </select>
        </div>
    </div>
    <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'center', padding: '1rem'}}>
        {TestData.filter((item)=>{
            item.status === 'COMPLETED' ? item.includes(item.status === 'COMPLETED'): item
        }).map((item)=>{
            const {id, name, status} = item;
            return (
            <div key={id} style={{width: '200px', height: '200px', border: '1px solid gray'}}>
                <div>{name}</div>
                <div>{status}</div>
            </div>
            )
        })}
    </div>
    </>
  )
}

export default Test