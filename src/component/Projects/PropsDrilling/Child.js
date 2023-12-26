import React from 'react'
import GrandChild from './GrandChild'

function Child({myGift}) {
  return (
    <div>
        <h1>Child Component: {myGift}</h1>
        <GrandChild myGift={myGift}/>
    </div>
  )
}

export default Child