import React, { useContext} from 'react';
import userDetailsContext from './UseContextStore';

function GrandChild() {
    const myData = useContext(userDetailsContext)
  return (
    <div>
        <h4>Grand Child Component</h4>
        <h1>My Name is : {myData}</h1>
    </div>
  )
}

export default GrandChild