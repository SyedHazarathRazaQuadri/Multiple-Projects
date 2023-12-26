import React from 'react'
import Child from './Child'

function GrandChild({myGift}) {
  return (
    <div>
        <h1>Grand Child Component: {myGift}</h1>
    </div>
  )
}

export default GrandChild