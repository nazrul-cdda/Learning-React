import { act, useReducer } from "react"

const cartReducer = (cart, action) => {
    if(action.type === "add_item") {
        return [...cart, action.item];
    }
    else if(action.type === "remove_item") {
        console.log("in");
        return cart.filter(item => item.id !== action.id);
    }
};

export const AddingItem = () => {
    const[cart, dispatch] = useReducer(cartReducer, []);
    const addItem = () => { 
        dispatch({ type: "add_item", item: {id: Date.now(), name: "Orange", price: 20}});
    };
    const removeItem = (id) => {
        dispatch({type: "remove_item", id});
    }
    return(
        <div>
            <h1>Hello</h1>
            <ul>
                {
                    cart.map(item=> (
                        <li key = {item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    )
}