import React from 'react'

let loggedIn = true;
let userName = "Syed";

function LogInPage() {
  return (
    <>
        {loggedIn ? <h1 className="text-right">👨🏻‍⚕️ Welcome {userName}!</h1> : <h1 className="text-right">Please Login</h1>}
    </>
  )
}

export default LogInPage