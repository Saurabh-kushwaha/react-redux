import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/todo/tosos.api';


function Todo({ todo }) {
  console.log(todo);
  const dispatch = useDispatch();
  return (
    <div>
        <h3>{todo.value}</h3>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>  
    </div>
  )
}

export default Todo