import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div>
        <h4>Child Component</h4>
        <GrandChild />
    </div>
  )
}

export default Child