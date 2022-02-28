import axios from 'axios'; 
import {DELETE_TODOS_ERROR } from './todo.actionType';
import { todoError, todoRequest, todoSuccess } from './todo.action';

export const addTodo = (value) => dispatch =>{  
    dispatch(todoRequest());
    axios
        .post("http://localhost:3000/todo",
            {
                value: value,
            }
        )
        .then((r) => {
            console.log(r.data);
            dispatch(todoSuccess(r.data))
        })
        .catch((error) => {
            dispatch(todoError(error));
        })
};

export const deleteTodo = (todoId) => (dispatch) => ({
    type: DELETE_TODOS_ERROR,
    payload: todoId,
})
