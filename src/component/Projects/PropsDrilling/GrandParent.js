import React from 'react'
import Parent from './Parent'
import { GiftProvider } from '../ContextData/ContextData'

function PropsDrilling() {
    // const syedGift = " 'Gift Me kuch bi nahi hai' "
  return (
    <div>
        <h1>Main Page</h1>
        {/* <Parent myGift={syedGift}/> */}
        <GiftProvider>
          <Parent />
        </GiftProvider>
    </div>
  )
}

export default PropsDrilling