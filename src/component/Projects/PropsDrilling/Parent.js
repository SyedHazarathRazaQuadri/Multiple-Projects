import React from 'react'
import Child from './Child'

function Parent({myGift}) {
  return (
    <div>
        <h1>Parent Component: {myGift}</h1>
        <Child myGift={myGift}/>
    </div>
  )
}

export default Parent