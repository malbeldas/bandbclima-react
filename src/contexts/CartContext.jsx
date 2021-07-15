import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);
export const useValueContext = () => useContext(CartContext);


const CartProvider = ({ children = [], defaultCart = [] }) => {
    
    const [cart, setCart] = useState(defaultCart);
    
    function addItem(item, quantity) {
        let obj = cart.find(o => o.item.id === item.id);
        if (obj === undefined) {
            setCart([{ item, quantity }]);
        }
    }

    function removeItem(itemId) {
        var filteredArray = cart.filter(e => e.item.id !== itemId);
        setCart(filteredArray);
    }

    function clearCart() {
        setCart([]);
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
}

export {CartProvider}