import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartItem({item, quantity}){
    const {cart, addItem, removeItem} = useContext(CartContext)

    return(
        <div>
            <img src={item.pictureUrl}/>
            <h2>{item.title}</h2>
            <h2>$ {item.price * quantity}</h2>
            <button onClick={()=>removeItem(item.id)}>Remove Item</button>
        </div>
    )
}

export {CartItem};