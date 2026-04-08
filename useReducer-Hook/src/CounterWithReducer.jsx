
import { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
    if(action === "add") state++;
    else if(action === "remove") state--;
    else if(action === "refresh") state = initialValue;
    return state;
};

export const CounterWithReducer = () => {
    const[state, dispatch] = useReducer(reducer,initialValue)
    return(
        <div>
            <h1>Cart : {state}</h1>
            <button onClick={() => dispatch("add")}>Add to Cart</button>
            <button onClick={() => dispatch("remove")}>Remove from the Cart</button>
            <button onClick={() => dispatch("refresh")}>Clear Cart</button>
        </div>
    )
}