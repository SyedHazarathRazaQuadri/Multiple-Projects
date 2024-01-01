import React, { useReducer } from 'react'

const initialState = [];
const reducerFunc = (state, action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: state.length + 1, 
                    liName: action.payload
                }
            ]
            case 'DELETE_ITEM':
                return state.filter(item => item.id !== action.payload);
        default: return state;
    }
}
const listStyles = {
    color: 'white',
    maxWidth: '300px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}
const buttonStyles = {
    marginLeft: '8px',

}
function TodoList() {
const [allTodoLists, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div className='text-center'>
        <h1 className='text-center text-6xl font-bold text-yellow-500 underline'>My Todo List [ {allTodoLists.length} ]</h1>
            
                <input onBlur={(e)=> dispatch(
                    {type:'ADD_ITEM', payload: e.target.value}
                    )} className='px-3 border py-2 mt-10' type="text" placeholder='Add your Task' />

                <div className='text-center bg-gray-600 my-4 py-6'>
                    {allTodoLists.map(item => <li style={listStyles} key={item.id}>{item.liName} 
                    <button style={buttonStyles} onClick={()=> dispatch({type: 'DELETE_ITEM', payload: item.id})}> 🚫 Delete</button></li>)}
                </div>
    </div>
  )
}
export default TodoList