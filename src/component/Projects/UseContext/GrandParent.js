import React, { useState } from 'react'
import Parent from './Parent'
import userDetailsContext from './UseContextStore'

function GrandParent() {
    const [name, setName] = useState(true);

    //this userName using in GrandChild Component
    const userName = "Syed Hazarath Raza";
  return (
    <>
    <userDetailsContext.Provider value={userName}>
        <div className='text-center'>
            <h4>Grand Parent Component</h4>
            <h1>My Name is : {name ? "Syed Hazarath" : "Syed Hazarath Raza Quadri"}</h1>
            <button onClick={() => setName(newName => !newName)}>Change Name</button>
            <Parent />
        </div>
    </userDetailsContext.Provider>
    </>
  )
}

export default GrandParent