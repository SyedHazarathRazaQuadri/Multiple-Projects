import React, { useState } from 'react'

function Themes() {
    const [purpleTheme, setPurpleTheme] = useState(true);
    const theme= {
        purpleTheme: {
            background: 'purple',
            color: 'white',
            padding: '12px'
        },
        darkTheme: {
            background: 'gray',
            color: 'white',
            padding: '12px'
        }
    }
  return (
    <>
        <div className='text-center'>
            <label style={{cursor: 'pointer', fontSize: '20px'}} htmlFor="theme">Change Theme</label>
            <input id='theme' type="checkbox"  checked={purpleTheme} onClick={() => setPurpleTheme(color => !color)}/>
            <div style={purpleTheme ? theme.purpleTheme : theme.darkTheme}>
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quae qui, temporibus  </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus numquam suscipit laboriosam et assumenda deserunt non quis ipsum est earum reprehenderit ipsam, error accusamus placeat nihil voluptates nisi corrupti similique.</p>
            </div>
        </div>
    </>
  )
}

export default Themes