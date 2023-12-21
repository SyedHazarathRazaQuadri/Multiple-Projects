import React, { useState } from 'react'
import './TodoList.css'

function TodoList() {
    const [task, SetTask] = useState('');
    const [todos,  setTodos] =useState([])
    const taskHandler =(e)=>{
        SetTask(e.target.value)
    }
    const submitHandler= (e)=>{
        e.preventDefault()
        const newTodos = [...todos, task]
        setTodos(newTodos);
        SetTask('')
    }
    const deleteTodo = (indexVal)=>{
        const Delete = todos.filter((todo, index)=> index !== indexVal);
        setTodos(Delete)
    }
  return (
    <div className='text-center'>
        <h1 className='text-center text-6xl font-bold text-yellow-500 underline'>My Todo List</h1>
            <form onSubmit={submitHandler}>
            <input value={task} onChange={taskHandler} className='px-3 border py-2 mt-10' type="text" placeholder='Add your Task' />
            <input className='cursor-pointer rounded-xl bg-blue-500 text-white ml-4 px-5 py-2' value="Add" type='submit' name='Add' />
            </form>
            <ul>
                {todos.map((todoItem)=>{
                   return <li>{todoItem}<span onClick={deleteTodo}>❌</span></li>
                })}
            </ul>
    </div>
  )
}

export default TodoList