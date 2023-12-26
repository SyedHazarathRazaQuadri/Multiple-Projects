import React, { useEffect, useState } from 'react'


function Parent() {
    let [value, setValue] = useState();
    value = true;
    const ChildCompo = () =>{
        return(
            <>
           <h1 className='text-center'>Your child component excited inside parent component</h1>
            </>
        )
    }
  return (
    <>
    {value && <ChildCompo /> }
    </>
  )
}

export default Parent