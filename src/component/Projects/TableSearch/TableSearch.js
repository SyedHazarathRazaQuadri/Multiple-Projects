import React, { useState } from 'react'
import TableData from './TableData.json'

document.querySelector('body').style.backgroundColor = 'white';

function TableSearch() {
    const [searchResults, setSearchResults] = useState('');
  return (
    <>
        <div className='w-full max-w-screen-lg rounded-xl mx-auto my-8 border border-slate-800'><input onChange={(e) => setSearchResults(e.target.value)} className='w-full p-4 rounded-xl' type="text" placeholder='Search data..' /></div>
        <table className='w-full text-sm text-center border border-slate-400 rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead>
            <tr className='border border-slate-400 py-2'>
                <th scope="col" className="px-6 py-3">First Name</th>
                <th scope="col" className="px-6 py-3">Last Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Gender</th>
            </tr>
            </thead>
            <tbody>
            {TableData.filter((item)=>{
                return searchResults.toLocaleLowerCase() === '' ? item : item.first_name.toLocaleLowerCase().includes(searchResults)
            }).map((item)=>{
                const {id, first_name, last_name, email, gender} = item;
                return(
                    <tr className='border border-slate-400' key={id}>
                        <td className="py-3">{first_name}</td>
                        <td className="py-3">{last_name}</td>
                        <td className="py-3">{email}</td>
                        <td className="py-3">{gender}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </>
  )
}

export default TableSearch