import React from 'react'
import Styles from './BgColor.css'

function BgColor() {
    let allColors = {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            backgroundColor: 'white',
            maxWidth: '1000px',
            margin: 'auto',
            padding: '0.5rem 1rem',
            marginTop: '3rem',
            borderRadius: '30px'
        }
    let RedColor = () =>{
        document.body.parentNode.style.backgroundColor = 'red';
    }
    let GreenColor = () =>{
        document.body.parentNode.style.backgroundColor = 'green';
    }
    let BlueColor = () =>{
        document.body.parentNode.style.backgroundColor = 'blue';
    }
    let OliveColor = () =>{
        document.body.parentNode.style.backgroundColor = 'olive';
    }
    let YellowColor = () =>{
        document.body.parentNode.style.backgroundColor = 'yellow';
    }
    let PurpleColor = () =>{
        document.body.parentNode.style.backgroundColor = 'purple';
    }
    let BlackColor = () =>{
        document.body.parentNode.style.backgroundColor = 'black';
    }
    
  return (
    <>
      <div style={allColors}>
        <span className="common-color redcolor" onClick={RedColor}>Red</span>
        <span className="common-color greencolor" onClick={GreenColor}>Green</span>
        <span className="common-color bluecolor" onClick={BlueColor}>Blue</span>
        <span className="common-color olivecolor" onClick={OliveColor}>Olive</span>
        <span className="common-color yellowcolor" onClick={YellowColor}>Yellow</span>
        <span className="common-color purplecolor" onClick={PurpleColor}>Purple</span>
        <span className="common-color blackcolor" onClick={BlackColor}>Balck</span>
      </div>  
    </>
  )
}

export default BgColor