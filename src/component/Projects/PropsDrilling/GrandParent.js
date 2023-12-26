import React from 'react'
import Parent from './Parent'

function PropsDrilling() {
    const syedGift = " 'Gift Me kuch bi nahi hai' "
  return (
    <div>
        <h1>Main Page</h1>
        <Parent myGift={syedGift}/>
    </div>
  )
}

export default PropsDrilling