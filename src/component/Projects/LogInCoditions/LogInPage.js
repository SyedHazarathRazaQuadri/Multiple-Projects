import React, { useState } from 'react'

function LogInPage() {
const [loggedIn, setLoggedIn] = useState(true);
const paragragh = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolor libero assumenda cumque laborum facilis soluta accusamus obcaecati reprehenderit, rem alias quam harum blanditiis, nostrum, ipsa atque excepturi non consectetur?";
  return (
    <>
      <h1 className='text-right'><button onClick={() => setLoggedIn(login => !login)}>{loggedIn? "Log In" : "Log Out"}</button></h1>
      <h1 className='text-center'>{loggedIn? "Hey! Login to my Wonderful Application" : `Successfully Log In! 🤩  here is the content ${paragragh}`}</h1>
    </>
  )
}

export default LogInPage