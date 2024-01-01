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
    const liStyles ={
      borderRight: '2px solid white',
      paddingRight: '25px'
    }
  return (
    <div className='nav_section'>
        <ul style={ulStyles}>
            <Link style={liStyles} to="/home"><li>Home</li></Link>
            <Link style={liStyles} to="/multi-bg-colors"><li>Multi Bg Colors</li></Link>
            <Link style={liStyles} to="/universities"><li>Universities</li></Link>
            <Link style={liStyles} to="/table"><li>Table Search</li></Link>
            <Link style={liStyles} to="/counter"><li>Counter</li></Link>
            <Link style={liStyles} to="todos"><li>To Do List</li></Link>
            <Link style={liStyles} to="/use-context"><li>Use Context</li></Link>
            <Link style={liStyles} to="/theme-color"><li>Theme Colors</li></Link>
            <Link to="login"><li>LogIn Test</li></Link>
        </ul>
    </div>
  )
}

export default NavBar