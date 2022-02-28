import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "../store/counter/counter.actionType";


export const Counter = () => {
    let dispatch = useDispatch();
    let count = useSelector((state) => state.counter.count);
    return (
        <div>
        <h1>{count}</h1>
            <button
              onClick={() => dispatch({
                  type: INCREMENT
              })}
            >Increment</button>
            <button
              onClick={() => dispatch({
                type: DECREMENT
              })}
            >Decrement</button>
        </div>  
    );
}