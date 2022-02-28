import { reducer }  from './reducer'
import { applyMiddleware, createStore,compose } from 'redux';
import thunk from 'redux-thunk'

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose();

export const store = createStore(
    reducer,
    createComposer(applyMiddleware(thunk))
);




// import { reducer }  from './reducer'
// import { applyMiddleware, createStore } from 'redux';
// // const logger = (state) => (next) => (action) => {
// //     console.log("dispatching", action);
// //     console.log("getState is", state.getState())
// //     let returnValue = next(action);
// //     console.log("new State",returnValue)
// //     return returnValue;
// //     // return next(action);
// // }

// export const store = createStore(
//     reducer, applyMiddleware()
// );

