import React from 'react'
import Child from './Child'
import { useGiftData } from '../ContextData/ContextData'

function Parent({myGift}) {
  const {giftData} = useGiftData()
  return (
    <div>
        {/* <h1>Parent Component: {myGift}</h1> */}
        <h1>Parent Component: {giftData}</h1>
        <Child myGift={myGift}/>
    </div>
  )
}

export default Parent