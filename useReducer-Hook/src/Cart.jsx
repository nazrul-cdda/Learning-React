
import React, { useReducer } from 'react';

const initialItems = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
}
const reducer = (cart, action) => {
    if(action.type === "ADD_ITEM") {
        const index = cart.items.findIndex(i => i.id === action.item.id);
        if(index !== -1) {
            const updatedItems = [...cart.items];
            updatedItems[index] = {...updatedItems[index], quantity:updatedItems[index].quantity + 1}
            return {
                ...cart,
                items: updatedItems,
                totalItems: cart.totalItems + 1,
                totalPrice: cart.totalPrice + action.item.price,
            }
        }
        else {
            return {
                ...cart,
                items:[...cart.items, {...action.item, quantity: 1}],
                totalItems: cart.totalItems + 1,
                totalPrice: cart.totalPrice + action.item.price,
            }
        }
    }
    else if(action.type === "RESET") {
        console.log("inserted");
        return {
            items:[],
            totalItems: 0,
            totalPrice: 0,
        };
        // return initialItems;
    }
    return cart;
};
export const Cart = () => {
    const[cart, dispatch] = useReducer(reducer, initialItems)
    const products = [
        {id: 0, name: "Unicorn", price: 49.99, quantity: 0},
        {id: 1, name: "Dinosaur", price: 119.99, quantity: 0},
        {id: 2, name: "Egg", price: 12.99, quantity: 0},
    ];
    const addItems = (item) => {
        dispatch({ type: "ADD_ITEM", item})
    }
    return (
        <div>
            <h1>Naraz</h1>
            <div>
                <ul>
                    {
                        products.map(item => (
                            <li key = {item.id}> {item.name} - ${item.price} Quantity : {item.quantity}
                            <button onClick={() => addItems(item)}>Add to Cart</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        cart.items.map(item => (
                            <li key = {item.id}> {item.name} - ${item.price} Quantity:{item.quantity}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <h2>Total Items: {cart.totalItems}</h2>
            <h2>Tota Price: ${cart.totalPrice.toFixed(2)}</h2>
            <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    )
}
