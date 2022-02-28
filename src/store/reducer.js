import { combineReducers } from "redux";
import { Authreducer } from "./auth/auth.reducer";
import { Counterreducer } from "./counter/counter.reducer";
import { Todoreducer } from "./todo/todo.reducer";

export  const reducer =  combineReducers({
    todos: Todoreducer,
    counter: Counterreducer,
    auth: Authreducer
})