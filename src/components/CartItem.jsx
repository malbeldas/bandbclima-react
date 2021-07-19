import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function CartItem({item, quantity}){
    const {removeItem} = useContext(CartContext)

    return(
        <tr>
            <td>{item.title}</td>
            <td><img className="cart-image" src={item.pictureUrl} alt="item"/></td>
            <td>$ {item.price}</td>
            <td>{quantity}</td>
            <td>$ {item.price * quantity}</td>
            <td><button onClick={()=>removeItem(item.id)}>Remove Item</button></td>
        </tr>
    )
}

export {CartItem};