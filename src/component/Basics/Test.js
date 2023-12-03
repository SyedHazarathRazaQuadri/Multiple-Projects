import React from 'react'
const data = [
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
    const syed = list.map((item) => " Hi " + item);
  return (
    <>
        <ul id="uniq">
            <li>{syed}</li>
        </ul>
    </>
  )
}

export default Test