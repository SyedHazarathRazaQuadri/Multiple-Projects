import React from 'react'
import Restarent from './Restarent';
const list = [
    {
        State: "Uttar Pradesh",
        Capital: "Lucknow",
    },
    {
        State: "Gujarat",
        Capital: "Gandhinagar",
    },
    {
        State: "Karnataka",
        Capital: "Bengaluru",
    },
    {
        State: "Punjab",
        Capital: "Chandigarh",
    },
    {
        State: "Maharashtra",
        Capital: "Mumbai",
    },
];
function Test() {
    const listData = list.map((item) => {
       return <option>{item.State}</option>
    });
    const uniq = {
        fontSize : "40px",
        margin: "1rem 2rem"
    }
  return (
    <>
        <select style={uniq}>{listData}</select>
        <Restarent />,
    </>
  )
}

export default Test;