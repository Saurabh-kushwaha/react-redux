import { DECREMENT, INCREMENT } from "./counter.actionType";
import { initialState } from "./counter.constants";

export const Counterreducer = (state = initialState, { type }) => {
    switch (type) {
        case INCREMENT: {
            return { ...state, count: state.count + 1 };
        }
            
        case DECREMENT: {
            return{...state,count:state.count-1}
        }
        default: {
            return  state ;
        }    
    }
};