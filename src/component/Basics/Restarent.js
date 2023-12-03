import React, { useState } from 'react'
import MenuCard from './MenuCard'
import Menu from './MenuApi'
import './style.css'

const Restarent = () => {
    const [MenuData, setMenuData] = useState(Menu);
  return (
    <>
      <MenuCard MenuData = {MenuData}/>
    </>
  )
}

export default Restarent
