import React from 'react'
import Child from './Child'
import { useGiftData } from '../ContextData/ContextData'

function GrandChild({myGift}) {
  const {giftData} = useGiftData()
  return (
    <div>
      {/* <h1>Grand Child Component: {myGift}</h1> */}
      <h1>Grand Child Component: {giftData}</h1>
    </div>
  )
}

export default GrandChild