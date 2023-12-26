import React from 'react'
import GrandChild from './GrandChild'

import { useGiftData } from '../ContextData/ContextData'

function Child({myGift}) {
  const {giftData} = useGiftData()
  return (
    <div>
        {/* <h1>Child Component: {myGift}</h1> */}
        <h1>Child Component: {giftData}</h1>
        <GrandChild />
    </div>
  )
}

export default Child