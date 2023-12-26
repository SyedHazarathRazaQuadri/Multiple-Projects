import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const ulStyles = {
        display: 'flex',
        justifyContent: 'space-around',
        background: 'black',
        color: 'white',
        padding: '1rem'
    }
  return (
    <div className='nav_section'>
        <ul style={ulStyles}>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/multi-bg-colors"><li>Multi Bg Colors</li></Link>
            <Link to="/universities"><li>Universities</li></Link>
            <Link to="/table"><li>Table Search</li></Link>
            <Link to="/counter"><li>Counter</li></Link>
            <Link to="props-drilling"><li>PropsDrilling</li></Link>
        </ul>
    </div>
  )
}

export default NavBar